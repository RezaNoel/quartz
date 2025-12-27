---
title: "IPsec, OpenVPN oder WireGuard? Praxisvergleich moderner VPN-Protokolle (Stand: Ende 2025)"
slug: vpn-protokolle-vergleich-ipsec-openvpn-wireguard
description: "Ein praxisnaher Vergleich von IPsec/IKEv2, OpenVPN (inkl. DCO) und WireGuard: Architektur, Performance, Betrieb, typische Fehler (MTU/NAT), plus Entscheidungsmatrix."
author: Reza Noel
language: de
lang: de
date: 2025-12-27
lastmod: 2025-12-27
tags:
  - vpn
  - security
  - networking
  - ipsec
  - ikev2
  - openvpn
  - wireguard
  - cloud
  - devops
  - sysadmin
aliases:
  - VPN-Protokolle Vergleich
  - IPsec vs OpenVPN vs WireGuard
canonical: https://rezanoel.ir/vpn-protokolle-vergleich-ipsec-openvpn-wireguard
robots: index, follow
keywords:
  - IPsec IKEv2
  - OpenVPN DCO
  - WireGuard Vergleich
  - Site-to-Site VPN
  - Remote-Access VPN
  - MTU MSS NAT-T
---

# IPsec, OpenVPN oder WireGuard? Ein Praxis-Guide von Reza Noel

> [!abstract] Kurz & Knapp  (TL;DR)
> Wenn du **klassische Site-to-Site-Tunnels** mit Hersteller-Support brauchst: **IPsec/IKEv2** ist oft „die Standardsprache“ zwischen Firewalls/Cloud-Gateways.  
> Wenn du **maximale Kompatibilität** (Clients, Ports, Sonderfälle) willst: **OpenVPN** bleibt relevant – und mit **DCO** wird es deutlich schneller (wo kompatibel). :contentReference[oaicite:0]{index=0}  
> Wenn du **einfach, schnell, modern** willst (und du deine Keys/Peers sauber managen kannst): **WireGuard** ist meist die angenehmste Wahl – mit klarer, schlanker Architektur. :contentReference[oaicite:1]{index=1}

---

## Warum dieser Artikel (und warum jetzt)?

Mein Name ist **Reza Noel**. In den letzten Jahren habe ich immer wieder dasselbe Muster gesehen:  
Ein Team braucht „einfach nur VPN“, aber nach 2 Wochen hängen alle in Tickets fest: **NAT**, **Ports**, **MTU**, „Warum geht’s im Büro, aber nicht im Hotel-WLAN?“ oder „Warum ist es so langsam, obwohl wir 1 Gbit haben?“.

VPN ist nicht nur „Verschlüsselung an“. VPN ist eine **Architekturentscheidung**:  
- Welches Protokoll passt zu eurem Betrieb?  
- Welche Geräte/Clouds müssen sprechen?  
- Wie wollt ihr Benutzer/Keys/Policies verwalten?  
- Welche Fehler wollt ihr *nicht* ständig debuggen?

In diesem Beitrag bekommst du einen **praxisnahen Vergleich** von **IPsec/IKEv2**, **OpenVPN** (inkl. **DCO**) und **WireGuard** – mit echten Betriebs-Fallen, einfachen Beispielen und einer Entscheidungsmatrix.

---

## Inhaltsverzeichnis

- [Begriffe: Was heißt „Tunneling“ eigentlich?](#begriffe-was-heißt-tunneling-eigentlich)
- [Die drei Kandidaten in 90 Sekunden](#die-drei-kandidaten-in-90-sekunden)
- [1) Architektur: Control Plane vs Data Plane](#1-architektur-control-plane-vs-data-plane)
- [2) Sicherheit & Kryptografie: wie „handshaken“ die Dinger?](#2-sicherheit--kryptografie-wie-handshaken-die-dinger)
- [3) NAT, Ports & Firewalls: der echte Alltag](#3-nat-ports--firewalls-der-echte-alltag)
- [4) Performance & Overhead: warum sich „schnell“ unterschiedlich anfühlt](#4-performance--overhead-warum-sich-schnell-unterschiedlich-anfühlt)
- [5) Betrieb & Skalierung: Benutzer, Schlüssel, Rotation, Audits](#5-betrieb--skalierung-benutzer-schlüssel-rotation-audits)
- [Entscheidungsmatrix: welches Protokoll wähle ich wann?](#entscheidungmatrix-welches-protokoll-wähle-ich-wann)
- [FAQ](#faq)
- [Quellen](#quellen)
- [Weiterführende Notizen (Zettelkasten / interne Links)](#weiterführende-notizen-zettelkasten--interne-links)

---

## Begriffe: Was heißt „Tunneling“ eigentlich?

Ein Tunnel ist im Kern: **Pakete werden in andere Pakete eingepackt**, damit sie über ein fremdes Netz (Internet) sicher und „wie intern“ übertragen werden. Cloudflare erklärt Tunneling sehr anschaulich – inklusive Hinweis, dass VPNs je nach Technologie auf unterschiedlichen OSI-Layern arbeiten können (IPsec eher Netzwerk-Layer, TLS/SSL eher höher). :contentReference[oaicite:2]{index=2}

> [!info] Merksatz
> VPN ist nicht nur „Verschlüsselung“, sondern **ein Transportweg** für Netzwerkverkehr – plus **Authentifizierung** und **Policy**.

---

## Die drei Kandidaten in 90 Sekunden

| Protokoll | Typische Vorteile | Typische Nachteile |
|---|---|---|
| **IPsec/IKEv2** | Industriestandard für Site-to-Site, Vendor-Support, Cloud-Gateways | Komplexität (Proposals, Policies), NAT/MTU-Fallen |
| **OpenVPN** | Sehr kompatibel, TLS-Ökosystem, viele Clients, flexibel | User-Space Overhead; DCO hilft, aber nicht überall |
| **WireGuard** | Schlank, schnell, einfache Konfiguration, moderne Kryptografie | Key-/Peer-Management muss sauber sein; weniger „Enterprise-Legacy“ |

---

## 1) Architektur: Control Plane vs Data Plane

### IPsec/IKEv2: sauber getrennt, aber dadurch komplex
Bei IPsec ist die Idee klassisch:  
- **IKEv2** kümmert sich um **Aushandlung/Authentifizierung** (Control Plane)  
- **ESP** transportiert die **verschlüsselten Datenpakete** (Data Plane)

Das ist technisch „korrekt“ – aber es führt zu mehr beweglichen Teilen. Der WireGuard-Paper beschreibt genau diese klassische Schichtung (xfrm, IKEv2-Daemon etc.) und warum das in der Praxis schnell kompliziert wird. :contentReference[oaicite:3]{index=3}

### OpenVPN: TLS-Tunnel + TUN/TAP
OpenVPN nutzt typischerweise **TLS** für den sicheren Kanal und läuft traditionell stark im **User Space**, was zu mehr Kopierarbeit zwischen Kernel und User Space führen kann (Performance/Overhead). Der WireGuard-Paper formuliert das ziemlich direkt (User-Space, Kopierkosten, großer TLS-Stack). :contentReference[oaicite:4]{index=4}

### WireGuard: „cryptokey routing“ statt Monster-Policy
WireGuard ist konzeptionell:  
- **Peer = Public Key**
- **AllowedIPs = welche Quell-/Ziel-Netze gehören zu welchem Peer**
- Daten werden als IP-Pakete über UDP kapselt.

Die WireGuard-Website beschreibt dieses Prinzip sehr konkret: IP-Paket → passenden Peer wählen → Paket verschlüsseln → via UDP an Endpoint senden. :contentReference[oaicite:5]{index=5}

> [!example] Mini-Beispiel (WireGuard-Denke)
> Du hast zwei Peers:
> - Peer A darf `10.10.0.2/32`
> - Peer B darf `10.10.0.3/32`
>
> Dann ist die Frage „Wohin geht das Paket?“ einfach: **Welche AllowedIPs matchen?**

---

### Diagramm: Wo sitzen die Protokolle grob?

```mermaid
flowchart TB
  subgraph ControlPlane[Control Plane]
    IKEv2["IPsec: IKEv2 (Aushandlung/Auth)"]
    TLS["OpenVPN: TLS Handshake/Auth"]
    WGHS["WireGuard: 1-RTT Handshake (Noise)"]
  end

  subgraph DataPlane[Data Plane]
    ESP["IPsec: ESP (IP Proto 50)"]
    OVPN["OpenVPN: Data Channel (TUN/TAP)"]
    WGUDP["WireGuard: UDP encapsulated IP packets"]
  end

  IKEv2 --> ESP
  TLS --> OVPN
  WGHS --> WGUDP
````

---

## 2) Sicherheit & Kryptografie: wie „handshaken“ die Dinger?

### IPsec/IKEv2: Standardisiert und extrem flexibel

IKEv2 ist ein Internet-Standard und macht genau das: gegenseitige Authentifizierung + Schlüsselmaterial aushandeln. ([tech-invite.com][1])
In der Praxis ist Flexibilität manchmal Fluch: viele Kombinationsmöglichkeiten (Algorithmen/Policies), die zwischen Herstellern nicht immer identisch „gut“ zusammenpassen.

> [!tip] Praxis-Hinweis
> Wenn du IPsec zwischen Vendor-Geräten machst: starte **konservativ** (empfohlene, kompatible Suites) und ändere **nur eine Sache pro Test**.

### OpenVPN: Zertifikate, CA, Client-Profiles

OpenVPN ist stark im PKI-Ökosystem: CA → Server-Zertifikat → Client-Zertifikate. Die Community-Docs zeigen genau den üblichen Flow (CA erstellen, Server/Client certs generieren). ([OpenVPN][2])
Wenn du Audits/Compliance-Prozesse hast, fühlt sich dieses Modell oft „erklärbar“ an.

### WireGuard: moderne, klare Krypto-Entscheidungen

WireGuard ist bewusst „opinionated“: moderne Bausteine, weniger Konfig-Spielraum. Die offizielle Protokollseite listet die Kryptoprimitive (z.B. ChaCha20/Poly1305, Curve25519, HKDF, BLAKE2s). ([wireguard.com][3])
Und der Paper betont u.a. den Noise-Ansatz und das Ziel: einfacher auditierbar, weniger Angriffsfläche. ([wireguard.com][4])

> [!warning] Wichtig (für alle drei)
> „Sicheres Protokoll“ ≠ „sicherer Betrieb“.
> Schlüssel-Handling, Logging, Patch-Zyklen, Rechte, Firewall-Regeln – das entscheidet im Alltag.

---

## 3) NAT, Ports & Firewalls: der echte Alltag

Wenn VPN „mysteriös“ kaputt geht, ist es sehr oft: **NAT** oder **Firewall/Ports**.

### IPsec: UDP 500/4500 + ESP (Proto 50)

Viele IPsec-Setups brauchen:

* UDP **500** (IKE)
* UDP **4500** (NAT-Traversal / NAT-T)
* **ESP** (IP Protokoll **50**) für die Daten

AWS dokumentiert das sehr konkret (Firewall rules + Hinweis auf UDP 4500 bei NAT-T). ([AWS Documentation][5])

#### NAT-Traversal ist nicht nur „optional“

Bei strongSwan (sehr verbreitet auf Linux) steht in den Docs: NAT-Traversal wird implementiert „ohne besondere Konfiguration“ und kann nicht einfach so deaktiviert werden. ([docs.strongswan.org][6])
Das ist nicht „schlecht“ – aber es überrascht Leute, wenn plötzlich UDP/4500 im Spiel ist.

> [!tip] Debug-Shortcut (IPsec)
> Wenn du keine SAs hochbekommst: prüfe zuerst **UDP/500 und UDP/4500** end-to-end und ob ESP durchkommt. Danach erst in Proposals versinken.

### OpenVPN: UDP vs TCP – und warum „TCP over TCP“ nervt

OpenVPN läuft oft über UDP, kann aber auch TCP. In der OpenVPN-Doku (tcp.md) wird UDP als Default erklärt und die Pros/Cons werden diskutiert. ([about.gitlab.com][7])
Wenn du OpenVPN über TCP tunnelst und innen drin laufen auch TCP-Anwendungen, bekommst du gerne Effekte wie „TCP-over-TCP Meltdown“ (Overhead, Retransmits, schlechte Latenz bei Loss). Eine gute technische Erklärung findet man z.B. bei ServerFault. ([Server Fault][8])

> [!example] Alltagsszene
> Hotel-WLAN blockt UDP. OpenVPN über TCP: *funktioniert*, aber VoIP/SSH fühlt sich zäh an.
> Lösung ist nicht „mehr CPU“, sondern oft: anderer Port, anderes Transportprofil, oder gleich ein Setup, das mit restriktiven Netzen besser klarkommt.

### WireGuard: UDP-only – und dafür sehr „klar“

WireGuard kapselt IP-Pakete über UDP. ([wireguard.com][9])
Das macht Firewalls oft einfacher (ein UDP-Port), aber wenn ein Netz UDP hart blockt, brauchst du Alternativen (z.B. über ein Overlay-Produkt).

#### Tailscale als Praxis-Hack gegen „UDP ist tot“

Tailscale baut auf WireGuard auf. ([Tailscale][10])
Wenn direkte UDP-Verbindungen nicht möglich sind, nutzt Tailscale Relay-Mechanismen (DERP) – und betont, dass der Relay-Server den Traffic nicht entschlüsseln kann. ([Tailscale][11])

---

## 4) Performance & Overhead: warum sich „schnell“ unterschiedlich anfühlt

### „Warum ist OpenVPN manchmal langsamer?“

Ein Teil ist Architektur: klassisch viel im User Space → mehr Kopien Kernel↔User. Der WireGuard-Paper nennt das als zentralen Performance-Nachteil. ([wireguard.com][4])

### OpenVPN DCO: der große Performance-Sprung (wo es passt)

OpenVPN DCO verschiebt Verschlüsselung/Entschlüsselung in den Kernel (statt User Space) – weniger Kopierarbeit, besseres Multithreading. ([OpenVPN][12])
Und das ist nicht mehr „nur ein Modul irgendwo“: OpenVPN beschreibt, dass DCO in den Linux-Kernel integriert wurde (ab Kernel **6.16**). ([blog.openvpn.net][13])

> [!note] Aber…
> DCO ist nicht „magisch überall“. Es gibt Kompatibilitätsbedingungen (z.B. bestimmte Konfigurationen/Ciphers/Transport). In vielen Admin-Setups lohnt es sich, DCO gezielt zu testen, statt es blind zu aktivieren.

#### DCO & Routing: Site-to-Site ist möglich, aber mit Regeln

Netgate (pfSense) dokumentiert für Site-to-Site mit DCO zusätzliche Routing-Schritte und Einschränkungen (z.B. wie Routes/iroute gehandhabt werden). ([Netgate Documentation][14])
Und in ihrem Blog wird auch erklärt, dass DCO-S2S je nach Topologie mehr Overhead bedeuten kann (z.B. pro Site eigene Instanz). ([Netgate][15])

### IPsec: oft schnell, aber MTU/MSS killt dich heimlich

Viele denken: „IPsec ist Kernel-nah, also schnell.“
Stimmt oft – **bis** Fragmentierung zuschlägt.

AWS nennt z.B. eine maximale MTU von **1446** Bytes (bei bestimmten Einstellungen) und empfiehlt, MTU/MSS passend zu den Algorithmen zu setzen, um Fragmentierung zu vermeiden. ([AWS Documentation][5])

> [!warning] MTU-Symptome (klassisch)
>
> * „Ping geht, aber Webseiten laden manchmal nicht“
> * „SMB/DB-Traffic bricht ab“
> * „Nur große Downloads sind kaputt“
>
> Das ist sehr oft: **MSS clamp / Path MTU / Fragmentierung**.

---

## 5) Betrieb & Skalierung: Benutzer, Schlüssel, Rotation, Audits

### IPsec in Unternehmen: Geräte sprechen „IPsec“

Viele Firewalls/Cloud-Gateways sprechen IPsec/IKEv2 als gemeinsame Basis.
Wenn du z.B. AWS Site-to-Site VPN nutzt, bekommst du standardmäßig **zwei Tunnel pro Verbindung** (Redundanz). ([AWS Documentation][16])
Das ist operativ angenehm: du planst gleich HA ein.

### OpenVPN: Benutzerverwaltung fühlt sich „klassisch IT“ an

Zertifikate/Profiles, klare Identitäten, zentrale PKI – das lässt sich gut in Policies packen. ([OpenVPN][2])
Wenn dein Betrieb sowieso PKI-Prozesse hat, passt OpenVPN oft mental besser.

### WireGuard: Key-Management ist die „eigentliche Aufgabe“

WireGuard ist technisch simpel – aber du musst sauber lösen:

* Wie verteilst du Keys?
* Wie widerrufst du Keys?
* Wie dokumentierst du AllowedIPs?
* Wie stellst du sicher, dass kein Peer zu viel darf?

Die Ubuntu-Docs erklären AllowedIPs in Beispielen sehr verständlich (Routing vs Addressing). ([Ubuntu][17])
Und gute Erklärtexte betonen: AllowedIPs ist praktisch Routing-Tabelle *und* ACL-Logik. ([stavros.io][18])

> [!tip] Wenn du WireGuard „enterprise-like“ willst
> Nutze ein Management-Layer (z.B. Produkte/Tools, oder ein internes Provisioning-System).
> Das Protokoll ist leicht – die Orga drumherum muss sitzen.

---

## Entscheidungsmatrix: welches Protokoll wähle ich wann?

> [!quote] Meine Faustregel
> **Betrieb schlägt Theorie.**
> Das beste Protokoll ist das, das du **stabil** betreiben kannst – mit eurem Team, euren Geräten, euren Netzen.

### 1) Site-to-Site (Firma ↔ Cloud / Standort ↔ Standort)

* **Wenn Vendor-Firewalls / Cloud-Gateway**: **IPsec/IKEv2**

  * * Standardisiert, weit verbreitet
  * * HA-Tunnels in Cloud-Anbietern üblich (z.B. AWS: 2 Tunnel) ([AWS Documentation][16])
  * – MTU/NAT-T-Fallstricke (Port 4500, MSS) ([AWS Documentation][5])

* **Wenn du volle Kontrolle auf Linux** und schlanke Konfig: **WireGuard**

  * * Einfaches Setup, schnelle Performance, klarer Betrieb ([wireguard.com][9])
  * – Key-Lifecycle musst du selbst lösen

* **OpenVPN (mit/ohne DCO)**: wenn du besondere Kompatibilität/Policies brauchst

  * * extrem flexibel, viele Clients
  * * DCO kann massiv helfen (Kernel-Offload, ab Kernel 6.16 integriert) ([OpenVPN][12])
  * – DCO-Routing/Topologie kann extra Aufwand sein ([Netgate Documentation][14])

### 2) Remote-Access (Mitarbeiter/Clients)

* **OpenVPN**: sehr stark, wenn du „klassische“ User-Profiles + PKI magst ([OpenVPN][2])
* **WireGuard**: super für Developer-Teams, wenn du Key-Provisioning automatisierst
* **IPsec/IKEv2**: häufig in „Enterprise-Client-Stacks“ / Betriebssystem-Integrationen, aber je nach Umgebung „zickig“ bei NAT/Hotspots

### 3) „UDP wird geblockt“ (restriktive Netzwerke)

* OpenVPN über TCP kann helfen, aber Performance-Tradeoffs beachten ([about.gitlab.com][7])
* Overlay-Ansätze (z.B. Tailscale) können Relay nutzen (DERP) und trotzdem Ende-zu-Ende verschlüsselt bleiben ([Tailscale][11])

---

## Ein kleines Praxis-Playbook (Checkliste)

> [!checklist] VPN-Rollout ohne Drama
>
> * [ ] **Ziel klar:** Site-to-Site oder Remote-Access?
> * [ ] **Netzplan schriftlich:** Subnetze, Routen, DNS, Split-Tunneling
> * [ ] **Ports/Firewall:** (IPsec: UDP 500/4500 + ESP; WG: UDP Port; OpenVPN: UDP/TCP) ([AWS Documentation][5])
> * [ ] **MTU/MSS testen:** besonders bei IPsec (Fragmentierung) ([AWS Documentation][5])
> * [ ] **Key/Cert Lifecycle:** Rotation, Revoke, Logging
> * [ ] **Monitoring:** Tunnel up/down, Latenz, Packet Loss, Rekey-Events
> * [ ] **Dokumentation:** 1 Seite „So debuggen wir VPN“

---

## FAQ

### Was ist „besser“: IPsec oder SSL/TLS-VPN?

Sie arbeiten auf unterschiedlichen OSI-Layern; beide können VPNs bauen. Cloudflare erklärt die Unterschiede (OSI-Layer, typische Pros/Cons). ([Cloudflare][19])
„Besser“ hängt an Use-Case, Betrieb, Kompatibilität.

### Warum braucht IPsec oft Port 4500?

Wenn NAT im Weg ist, kommt NAT-Traversal (NAT-T) ins Spiel. AWS erwähnt explizit UDP/4500, wenn NAT-T genutzt wird. ([AWS Documentation][5])
strongSwan beschreibt NAT-Traversal als Teil der Implementierung. ([docs.strongswan.org][6])

### Wird OpenVPN mit DCO wirklich „Kernel-schnell“?

DCO offloaded Data-Channel Crypto in den Kernel. ([OpenVPN][12])
OpenVPN dokumentiert außerdem die Aufnahme in den Linux-Kernel (ab 6.16). ([blog.openvpn.net][13])
Ob du den Vorteil spürst, hängt an Config und Szenario.

### Was bedeutet „AllowedIPs“ bei WireGuard?

Es ist praktisch Routing-Logik und Sicherheits-Filter: welche IPs einem Peer zugeordnet sind. Ubuntu erklärt das mit Beispielen. ([Ubuntu][17])
Eine gute Kurzform: AllowedIPs wirkt beim Senden wie Routing-Tabelle und beim Empfangen wie ACL. ([stavros.io][18])

---

## Quellen

* WireGuard offizielle Doku (Quickstart/Prinzip + Krypto) ([wireguard.com][9])
* WireGuard Paper (NDSS-Version, Architektur/Komplexität/Usability) ([wireguard.com][4])
* OpenVPN DCO (Funktionsweise, Kernel-Integration ab Linux 6.16) ([OpenVPN][12])
* Netgate/pfSense DCO-Routing & Site-to-Site Hinweise ([Netgate Documentation][14])
* AWS Site-to-Site VPN (2 Tunnel, Ports, MTU/MSS Empfehlungen) ([AWS Documentation][16])
* strongSwan NAT-Traversal Doku ([docs.strongswan.org][6])
* Cloudflare (Tunneling / IPsec vs SSL-VPN Kontext) ([Cloudflare][20])
* Tailscale (WireGuard-Basis + DERP/Relay & Verschlüsselung) ([Tailscale][11])

---

## Weiterführende Notizen (Zettelkasten / interne Links)

> [!info] Interne Links (Obsidian-Style)
>
> * [[Networking/OSI-Modell]]
> * [[Security/VPN-Grundlagen]]
> * [[Security/IPsec-IKEv2]]
> * [[Security/OpenVPN]]
> * [[Security/OpenVPN-DCO]]
> * [[Security/WireGuard]]
> * [[Troubleshooting/MTU-MSS-Fragmentierung]]
> * [[Troubleshooting/NAT-Traversal-UDP-4500]]
> * [[Cloud/AWS-Site-to-Site-VPN]]
> * [[Tools/strongSwan]]
> * [[Tools/pfSense-OpenVPN-DCO]]

<div style="display:none" id="seo-data-vpn">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist „besser“: IPsec oder SSL/TLS-VPN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPsec und SSL/TLS-VPN arbeiten auf unterschiedlichen OSI-Layern und können beide VPNs bereitstellen. Cloudflare beschreibt die Unterschiede inklusive typischer Vor- und Nachteile. Welche Lösung „besser“ ist, hängt stark vom Use-Case, vom Betrieb und von der gewünschten Kompatibilität ab."
      }
    },
    {
      "@type": "Question",
      "name": "Warum braucht IPsec oft Port 4500?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wenn Network Address Translation (NAT) zwischen den Endpunkten eingesetzt wird, kommt NAT-Traversal (NAT-T) zum Einsatz. Dabei wird UDP Port 4500 verwendet. AWS dokumentiert diesen Port explizit für IPsec mit NAT-T, und strongSwan beschreibt NAT-Traversal als festen Bestandteil der Implementierung."
      }
    },
    {
      "@type": "Question",
      "name": "Wird OpenVPN mit DCO wirklich „Kernel-schnell“?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit Data Channel Offload (DCO) wird die Verschlüsselung des Datenkanals in den Kernel verlagert. OpenVPN dokumentiert diese Offload-Architektur sowie die Aufnahme in den Linux-Kernel (ab Version 6.16). Ob der Performance-Gewinn spürbar ist, hängt stark von Konfiguration und Einsatzszenario ab."
      }
    },
    {
      "@type": "Question",
      "name": "Was bedeutet „AllowedIPs“ bei WireGuard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AllowedIPs definiert, welche IP-Adressen einem Peer zugeordnet sind. Es fungiert gleichzeitig als Routing-Logik beim Senden und als Zugriffskontrollliste (ACL) beim Empfangen. Ubuntu erklärt dieses Verhalten anhand von Beispielen, eine kompakte Zusammenfassung liefert stavros.io."
      }
    }
  ]
}
</div>

<script>
  const schemaDataVpn = document.getElementById('seo-data-vpn').innerText;
  const scriptVpn = document.createElement('script');
  scriptVpn.type = 'application/ld+json';
  scriptVpn.text = schemaDataVpn;
  document.head.appendChild(scriptVpn);
</script>
