---
title: "KI-gestütztes Recruiting: Chancen & Risiken – KI ist ein Sieb, kein Richter"
description: "Deutschland/EU (Stand Ende 2025): Automated Screening, Semantic Search, Bias in Algorithmen, ATS-Optimierung, AI Video Interviews, EU AI Act & DSGVO – plus: Digital Garden als Beweisraum für echte Kompetenz."
slug: ki-gestuetztes-recruiting-chancen-risiken-sieb-kein-richter
date: 2025-12-28
lastmod: 2025-12-28
author: Reza Noel
tags:
  - KI-gestütztes-Recruiting
  - Bias-in-Algorithmen
  - ATS-Optimierung
  - Transparenzpflicht
  - Authentizität-im-Bewerbungsprozess
  - EU-AI-Act
  - DSGVO
  - Bewerbungsprozess
  - Digital-Garden
keywords:
  - KI-gestütztes Recruiting
  - Automated Screening
  - Semantic Search
  - Bias in Algorithmen
  - ATS-Optimierung
  - Transparenzpflicht
  - Authentizität im Bewerbungsprozess
  - EU AI Act
  - DSGVO Artikel 22
  - AI Video Interviews
  - Digital Garden
canonical: https://rezanoel.ir/ki-gestuetztes-recruiting-chancen-risiken
status: evergreen
zettel_id: REZA-HR-AI-2025-12-28
---

> [!summary] Kurz & Knapp (TL;DR)
> - **KI-gestütztes Recruiting** ist heute oft ein *Vorfilter*, kein finales Urteil.  
> - **Automated Screening** kann aus **1.000 Bewerbungen** sinnvoll die **Top 10** finden – wenn es **Skill Mapping** statt Keyword-Zählen macht.  
> - Für Bewerber gilt: **Semantic Search** liest *Kontext*, nicht nur Wörter („Python“ reicht nicht).  
> - Größtes Risiko: **Bias in Algorithmen** + *Blindvertrauen* in Scores.  
> - In der EU ist Recruiting-KI **High-Risk** (EU AI Act) – und **rein automatische Ablehnung** ist unter **DSGVO Art. 22** oft heikel (mit Ausnahmen).  
> - Beste Gegenstrategie für beide Seiten: **Digital Garden** (Website/GitHub/Notizen) als **Beweisraum**.  
>
> **Mein Fazit:** KI ist ein **Sieb (Sieve)**, kein **Richter (Judge)**.

---

## Inhaltsverzeichnis
1. [Warum das Thema jetzt brennt](#warum-das-thema-jetzt-brennt)
2. [KI-gestütztes Recruiting: Wo KI wirklich sitzt](#ki-gestütztes-recruiting-wo-ki-wirklich-sitzt)
3. [1) Automated Screening: Skill Mapping statt Keywords](#1-automated-screening-skill-mapping-statt-keywords)
   - [Für Arbeitgeber](#für-arbeitgeber)
   - [Für Bewerber: Semantic Search](#für-bewerber-semantic-search)
4. [2) Bias in Algorithmen: Wenn „neutral“ nur so aussieht](#2-bias-in-algorithmen-wenn-neutral-nur-so-aussieht)
   - [Für Arbeitgeber](#für-arbeitgeber-1)
   - [Für Bewerber](#für-bewerber)
5. [3) ATS-Optimierung: Lesbarkeit + Beweis + Potenzial](#3-ats-optimierung-lesbarkeit--beweis--potenzial)
   - [Für Arbeitgeber: Growth Potential](#für-arbeitgeber-growth-potential)
   - [Für Bewerber: Contextual Proof](#für-bewerber-contextual-proof)
6. [4) AI Video Interviews: Soft Skills messen – oder behaupten?](#4-ai-video-interviews-soft-skills-messen--oder-behaupten)
7. [5) Recht & Ethik in DE/EU: EU AI Act & DSGVO](#5-recht--ethik-in-deeu-eu-ai-act--dsgvo)
   - [Transparenzpflicht](#transparenzpflicht)
   - [DSGVO Art. 22 in normaler Sprache](#dsgvo-art-22-in-normaler-sprache)
8. [6) Authentizität im Bewerbungsprozess: Das Paradox KI-CVs](#6-authentizität-im-bewerbungsprozess-das-paradox-ki-cvs)
9. [7) Digital Garden: Der Puffer gegen das Zahl-Mindset](#7-digital-garden-der-puffer-gegen-das-zahl-mindset)
10. [Fazit: Sieb, nicht Richter](#fazit-sieb-nicht-richter)
11. [FAQ](#faq)
12. [Mini-Checklisten](#mini-checklisten)
13. [Quellen & Links](#quellen--links)
14. [Zettelkasten-Notizen](#zettelkasten-notizen)

---

## Warum das Thema jetzt brennt

Zwei Kräfte treffen aufeinander:

1. **Bewerbungsflut**: Viele Rollen erzeugen Hunderte bis Tausende Bewerbungen. Ohne Vorfilter wird Recruiting langsam oder willkürlich.  
2. **Regulierung**: In der EU wird KI im Recruiting als **High-Risk** behandelt – mit Pflichten zu Risiko-Management, Dokumentation und **Human Oversight** (menschlicher Kontrolle).[^aiact]

> [!info] Stand Ende 2025 (EU AI Act in einfachen Daten)
> - **02.02.2025**: Verbote + Grundbegriffe + AI-Literacy gelten.  
> - **02.08.2025**: Regeln für General-Purpose AI (GPAI) + Governance.  
> - **02.08.2026**: **High-Risk-Regeln (Annex III)** gelten – *inkl. Recruiting/Selection/Filtering*.[^aiact]  
> - **02.08.2027**: Regeln für High-Risk-KI in regulierten Produkten.[^aiact]  
>
> *Hinweis:* Es gibt politische Diskussionen über Verknüpfungen mit Standards/Support-Tools („Digital Omnibus“).[^aiact]

---

## KI-gestütztes Recruiting: Wo KI wirklich sitzt

Viele denken: „Die KI entscheidet.“  
Realistischer (und besser) ist:

- KI **strukturiert** Daten (Parsing)
- KI **ordnet** (Clustering/Ähnlichkeit)
- KI **priorisiert** (Ranking)
- Menschen **entscheiden** (oder sollten es)

> [!note] Merksatz
> **Ranking ist eine Hypothese.** Keine Wahrheit.

### Visual (1 Diagramm reicht)

```mermaid
flowchart TD
  A[1,000 Bewerbungen] --> B[CV Parsing: Text -> strukturierte Felder]
  B --> C[Skill Extraction: Projekte, Aufgaben, Links]
  C --> D[Skill Mapping: Ontologie / Skill Graph]
  D --> E[Matching & Ranking: Rolle <-> Skills]
  E --> F[Top-N + kurze Begründungen]
  F --> G["Human Review (Menschliche Überprüfung)"]
  G --> H[Interview / Work Sample]
  H --> I[Einstellung]

  %% Styling für den entscheidenden Schritt
  style G fill:#f96,stroke:#333,stroke-width:4px
````

---

## 1) Automated Screening: Skill Mapping statt Keywords

### Für Arbeitgeber

**Alt (Keyword-Logik):**

* JD: „Python“
* CV: „Python“
* Match ✅

**Neu (Skill Mapping / Skills-first):**

* System extrahiert Skills aus **Projekten** und **Kontext**
* ordnet Skills in eine **Taxonomie/Ontologie** ein
* bewertet **Tiefe**, **Aktualität**, **Relevanz**

> [!tip] Wie KI aus 1.000 Bewerbungen die Top 10 findet (ohne Zauberei)
>
> 1. **Must-have Skills** erkennen (z. B. API-Design, Testing, Datenbanken)
> 2. **Belegstärke** messen (Links, Projekte, Messwerte)
> 3. **Ähnlichkeit zur Rolle** berechnen (semantisch, nicht nur Wörter)
> 4. **Risiko-Flags** markieren (unklare Claims, fehlende Nachweise)
> 5. **Human Review** für finale Entscheidung

#### Beispiel: Zwei „Python“-Bewerber

| Kandidat | Text im CV                                                                        | Was ein besseres System „sieht“   |
| -------- | --------------------------------------------------------------------------------- | --------------------------------- |
| A        | „Python, motiviert, Teamplayer“                                                   | wenig Kontext, wenig Belege       |
| B        | „FastAPI-Service, Redis Cache, 2 Mio Requests/Tag; P95 410ms → 266ms; Tests + CI“ | echte Aufgaben + Resultat + Proof |

> [!warning] Realität-Check (wichtig!)
> Nicht jedes Unternehmen nutzt schon echte Ontologien. Viele Systeme sind 2025 **hybrid**: etwas Semantik, viel Keyword, plus harte Filter (Format, Pflichtfelder).
> **Deshalb:** Du optimierst nicht für „die perfekte KI“, sondern für *ein gemischtes System*.

---

### Für Bewerber: Semantic Search

**Semantic Search** heißt: Das System sucht *Bedeutung*, nicht nur Begriffe.

* „Python“ ist ein Signal – aber schwach.
* Projekte + Kontext + Ergebnisse sind ein **starkes Signal**.

> [!example] Semantic Search in Menschensprache
> Nicht: „Hat die Person Python geschrieben?“
> Sondern: „Hat die Person Probleme gelöst, die in dieser Rolle typisch sind – und kann sie das belegen?“

**Konsequenz:**
Schreib nicht nur Skills, **zeige Spuren**.

* GitHub/Portfolio
* kurze Projektbeschreibungen
* 1–2 Messwerte (Performance, Nutzer, Fehlerquote, Zeitersparnis)

---

## 2) Bias in Algorithmen: Wenn „neutral“ nur so aussieht

Bias ist kein „Social-Media-Thema“. Es ist ein **Qualitäts- und Risiko-Thema**.

### Für Arbeitgeber

Bias entsteht typischerweise durch:

* **historische Daten** (frühere Einstellungen waren evtl. unfair)
* **Proxy-Merkmale** (Name, Sprache, Adresse, Lücken, Format)
* **Feedback-Loops** (wer eingeladen wird, erzeugt mehr Daten → wird „noch besser“)
* **unterrepräsentierte Gruppen** (z. B. Migranten/Quereinsteiger) → Modell lernt falsche Muster

> [!danger] Typischer Denkfehler
> „Wir löschen Geschlecht, dann ist es fair.“
> In der Praxis bleiben **Proxies**.

#### Minimal-Standard für weniger Bias (praktisch)

* **Messbare Kriterien** definieren (Rubrics)
* **Auditierbarkeit**: Logs + Begründungen speichern
* **Gruppenvergleich**: Fehlerquoten je Gruppe prüfen (ohne in Diskriminierung abzurutschen)
* **Human Oversight**: echte Befugnis zu stoppen/überstimmen

> [!note] Datenschutz-Realität
> Schon das Auslesen (Parsing) ist meist ok, aber **zusätzliche Analyse** kann Art. 22 DSGVO relevant machen (je nach Prozess).[^hamburg]

---

### Für Bewerber

Du kannst Bias nicht komplett kontrollieren. Aber du kannst **Missverständnisse reduzieren**:

1. **Standardisierte Struktur** (Titel, Zeiträume, Ort, Rolle)
2. **Eindeutige Belege** (Repo, Demo, Zertifikat, Referenz)
3. **Klarer Text** statt Deko-Sätze
4. **Keine Übertreibung** (sonst wirkt es „künstlich“)

> [!tip] Ziel
> Du willst, dass die Maschine dich **weniger raten** muss – und der Mensch dich **schneller versteht**.

---

## 3) ATS-Optimierung: Lesbarkeit + Beweis + Potenzial

„ATS-Optimierung“ klingt nach Trick. Ich meine: **Lesbar, prüfbar, fair.**

### Für Arbeitgeber: Growth Potential

Viele Unternehmen bewegen sich Richtung **Skills-based Hiring**: Fähigkeiten zählen mehr als alte Jobtitel.[^linkedin]

**Growth Potential** (Potenzial) wird oft indirekt geschätzt über:

* Skill-Nähe zu Must-haves (Transfer)
* Lernkurven (z. B. neue Tools in Projekten)
* Qualität von Work Samples
* Konsistenz in Denken/Kommunikation

> [!example] Tool-Kategorien (ohne Marketing-Bullshit)
>
> * **Skills-Cloud / Skill-Inferenz** (z. B. Skills als „gemeinsame Sprache“ im HCM)
> * **Talent-Intelligence-Plattformen** (Skills-Graph, Matching, interne/externe Mobilität)
> * **Skills-basierte Reports** (Talentpool vergrößern statt nur „CV-Historie“)
>
> Beispiele/Einordnung: Workday betont Skills-Cloud + Skills-based Hiring.[^workday]
> LinkedIn zeigt Effekte von Skills-first Pools (Report 2025).[^linkedin]

> [!warning] Wichtig
> Growth Potential ist **keine Zahl, die „wahr“ ist**.
> Es ist eine **Schätzung**, die du mit Work Samples und Interviews validieren musst.

---

### Für Bewerber: Contextual Proof

> [!quote] Contextual Proof
> Nicht „Ich kann X“, sondern: „Ich habe X **im Kontext Y** gemacht und Ergebnis **Z** erreicht.“

#### Die Formel (merkbar)

**Aktion + Kontext + Tool + Ergebnis + Zahl + Proof**

**Schwach:**

* „Ich kann Python und APIs.“

**Stark:**

* „FastAPI-Service (Python, Postgres, Docker) gebaut.
  P95 Latenz **410ms → 266ms** durch Caching + Indexing.
  Tests (95% Coverage) + CI. Repo: …“

#### Mini-Template (copy/paste)

```text
[Projekt/Feature] – Stack
Problem: …
Beitrag: …
Ergebnis: … (Zahl)
Proof: Link (Repo/Demo/Screenshot)
```

<details>
<summary><strong>Beispiel: „Quantifiable Bullet“ – zwei Versionen</strong></summary>

* Version A: „API-Performance verbessert.“
* Version B: „P95 Latenz um **35%** gesenkt (410ms → 266ms) via Redis-Caching + DB-Indexing; Monitoring mit Prometheus/Grafana.“

</details>

---

## 4) AI Video Interviews: Soft Skills messen – oder behaupten?

AI Video Interviews versprechen frühe Einschätzung von Soft Skills.

* **Text/NLP** (Inhalt der Antwort) kann sinnvoll sein
* **Tonfall/Voice-Features** sind schon heikler
* **Körper-/Gesichts-Analyse** ist am kritischsten – wissenschaftlich und ethisch umstritten
  (einige Anbieter haben Gesichts-Analyse-Komponenten zurückgefahren/entfernt).[^hirevue][^wired]

> [!warning] Regel für Arbeitgeber
> Wenn ein Tool sagt, es erkennt „Leadership“ aus Mimik:
> **extrem skeptisch sein** + zusätzlich absichern (Validierung, Audit, Human Review).

### Für Arbeitgeber (sinnvoll vs. riskant)

**Sinnvoll:**

* standardisierte Fragen
* klare Bewertungsrubric
* menschliche Review-Stufe
* Opt-out/Alternativen (wo möglich)

**Riskant:**

* „Emotionserkennung“ als Wahrheit
* intransparente Scores
* automatische Ablehnung ohne menschliche Prüfung

### Für Bewerber (Angst vor der „Maschine“)

Dein größter Gegner ist selten die Kamera. Es ist Stress.

> [!tip] 4-Schritt-Plan (funktioniert wirklich)
>
> 1. Antworte in 3 Blöcken: **Kontext → Handlung → Ergebnis**
> 2. Sprich **langsamer** als normal
> 3. Mach 1 Test: Licht/Ton/Blickwinkel
> 4. Wenn du stockst: **kurz Pause**, dann weiter (wirkt menschlich)

---

## 5) Recht & Ethik in DE/EU: EU AI Act & DSGVO

> [!important] Kein Legal Advice
> Das hier ist ein praktischer Überblick, keine Rechtsberatung.

### EU AI Act: Recruiting-KI = High-Risk

Recruiting/Selection/Filtering fällt in der EU in den **High-Risk**-Bereich (Annex III).[^annex][^kpmg]
High-Risk bedeutet u. a.:

* Risiko-Management
* Daten-Governance
* technische Dokumentation + Logging
* Transparenzpflichten (je nach Rolle: Provider/Deployer)
* **Human Oversight** (menschliche Kontrolle)

### Transparenzpflicht

Transparenz ist nicht „nice to have“. Sie ist Teil von Compliance:

* Unter **DSGVO** musst du Betroffene u. a. über relevante Verarbeitung informieren.
* Bei automatisierter Entscheidungsfindung sind zusätzliche Infos relevant („Logik“, Bedeutung, Folgen) – je nach Setup.[^wp29]

> [!tip] Praktische Formulierung (für Karriereseiten/Emails)
> „Wir nutzen Software, um Bewerbungen zu strukturieren und zu priorisieren.
> Die finale Entscheidung trifft ein Mensch. Bei Fragen oder Widerspruch bieten wir eine menschliche Prüfung an.“

---

### DSGVO Art. 22 in normaler Sprache

**Art. 22 DSGVO** betrifft Entscheidungen, die **ausschließlich automatisiert** sind **und** dich „rechtlich oder ähnlich erheblich“ betreffen.
Es gibt **Ausnahmen** (z. B. Vertragserforderlichkeit, Einwilligung, gesetzliche Erlaubnis), aber zusätzliche Schutzmaßnahmen sind wichtig.[^gdpr22][^wp29]

> [!note] Alltagsdeutsch
> Ein „komplett automatisches Nein“ **kann** in vielen Konstellationen problematisch sein –
> und sollte jedenfalls einen Weg zur **menschlichen Intervention** haben.

---

## 6) Authentizität im Bewerbungsprozess: Das Paradox KI-CVs

Hier knallt es 2025 richtig:

* Arbeitgeber bekommen mehr Bewerbungen – viele klingen gleich.
* Bewerber nutzen KI – Texte werden glatt, aber leer.

### Für Arbeitgeber: „Hat das die Person geschrieben?“

Es gibt keinen perfekten „AI-Detektor“. Was stabiler ist:

* **Kohärenz-Checks**: CV ↔ LinkedIn ↔ GitHub ↔ Gespräch
* **Work Samples**: kleine realistische Aufgabe (nicht LeetCode-Zirkus)
* **Nachfragen zu Details**: Warum dieser Trade-off? Warum dieses Tool?
* **Zeitnahe Mini-Tasks**: 30–60 Minuten, klare Kriterien

> [!tip] Gute Praxis
> Prüfe nicht „Echtheit“ über Stil, sondern über **Tiefe**.

### Für Bewerber: Warum zu viel KI dich schwächt

Wenn dein Text:

* perfekt glatt
* generisch
* ohne konkrete Details/Metriken
* ohne echte Links/Belege

… wirkst du austauschbar.

> [!note] Meine Regel
> KI als **Editor**, nicht als **Ghostwriter**.
> Lass dir Struktur helfen – aber fülle sie mit deinem echten Inhalt.

---

## 7) Digital Garden: Der Puffer gegen das Zahl-Mindset

Ein CV ist eine **Zusammenfassung**.
Ein ATS macht daraus oft eine **Zahl**.
Ein **Digital Garden** zeigt **Tiefe**.

> [!summary] Warum das beiden hilft
>
> * **Arbeitgeber** sehen Denkweise + Belege (nicht nur Score)
> * **Bewerber** werden „prüfbar“: Projekte, Notizen, Entscheidungen, Trade-offs

### Minimal-Setup (stark genug)

* `/projects/` → 3–5 Projekte (Problem → Lösung → Ergebnis → Links)
* `/notes/` → kurze Atomic Notes (Caching, Async, Testing, Architektur)
* `/now/` → woran du arbeitest + Ziel
* GitHub: Pinned Repos + saubere READMEs

#### Mini-Struktur für eine Case Study

```markdown
# Projektname
**Problem:** …
**Constraints:** …
**Lösung:** …
**Trade-offs:** …
**Ergebnis:** … (Zahl)
**Links:** Repo / Demo / Diagramm
```

> [!tip] Wichtig (damit es nicht „missionarisch“ wirkt)
> Ein Digital Garden ersetzt kein gutes CV.
> Er **ergänzt** es – und macht dich im Interview „tiefer“.

---

## Fazit: Sieb, nicht Richter

> [!quote] KI ist ein **Sieb (Sieve)**, kein **Richter (Judge)**.
> Sie kann vorsortieren und Muster finden.
> Aber sie sollte nicht die letzte Instanz über Menschen sein.

### Was Arbeitgeber mitnehmen sollten

* KI spart Zeit – aber **Verantwortung bleibt**
* **Bias** messen, dokumentieren, auditierbar machen
* **Human Oversight** ist echte Kontrolle, keine Deko
* Work Samples schlagen „Pseudo-Persönlichkeitsmessung“

### Was Bewerber mitnehmen sollten

* Kontext schlägt Keywords (**Semantic Search**)
* **Contextual Proof** + Belege + Metriken
* KI als Editor nutzen, nicht als Maske
* **Digital Garden** als Beweisraum bauen

---

## FAQ

**Ist KI im Recruiting in Deutschland erlaubt?**
Ja, grundsätzlich – aber Recruiting-KI fällt oft in **High-Risk**-Anwendungen (EU AI Act) und muss sauber gemanagt werden.[^aiact]

**Was ist der häufigste Fehler von Bewerbern?**
Nur Skills aufzählen („Python“) statt **Proof im Kontext** zu liefern.

**Was ist der häufigste Fehler von Unternehmen?**
„Die KI hat entschieden.“ (Ohne Review, ohne Logs, ohne klare Kriterien.)

**Soll ich KI für die Bewerbung nutzen?**
Ja – zum **Verbessern**. Nein – zum **Erfinden**.

---

## Mini-Checklisten

### Für Arbeitgeber (KI-gestütztes Recruiting)

* [ ] High-Risk Use Case identifiziert (Screening/Filtering/Selection)?[^annex]
* [ ] Human Oversight definiert (wer darf stoppen/überstimmen)?
* [ ] Dokumentation + Logging + Auditpfad vorhanden?
* [ ] Bias-Monitoring (Fehlerquoten, Drift, Proxy-Risiken)?
* [ ] Transparenz im Prozess (Info an Bewerber + Review-Weg)?
* [ ] Work Samples mit Rubrics statt „Mimik = Wahrheit“?

### Für Bewerber (ATS-Optimierung + Authentizität)

* [ ] 2–3 Projekte mit Kontext + Zahl + Link
* [ ] Skills zeigen, nicht nur nennen
* [ ] Bulletpoints: Aktion + Tool + Ergebnis + Metrik
* [ ] CV sauber strukturiert (Titel, Daten, klare Überschriften)
* [ ] GitHub/Portfolio gepflegt (READMEs zählen)
* [ ] Video-Interview: 3-Block-Antworten (Kontext/Handlung/Ergebnis)

---

## Quellen & Links

> [!note] Hinweis
> Links sind bewusst primär (EU/Behörden) und seriös sekundär (Fachquellen).

1. EU AI Act Service Desk – Implementation Timeline:
   [https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline)
2. EU AI Act Service Desk – Annex III (High-Risk):
   [https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3)
3. WP29 / Article 29 Working Party – Guidelines zu Art. 22 (WP251 rev.01, DE):
   [https://datenschutz.hessen.de/sites/datenschutz.hessen.de/files/2022-11/wp251rev01_de.pdf](https://datenschutz.hessen.de/sites/datenschutz.hessen.de/files/2022-11/wp251rev01_de.pdf)
4. DSGVO Art. 22 (Lesefassung):
   [https://gdpr-info.eu/art-22-gdpr/](https://gdpr-info.eu/art-22-gdpr/)
5. Hamburg DPA – Applicant Data Protection & Recruiting (2024):
   [https://datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Datenschutz/Informationen/240611_Information_Applicant_Data_Protection_and_Recruiting_EN.pdf](https://datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Datenschutz/Informationen/240611_Information_Applicant_Data_Protection_and_Recruiting_EN.pdf)
6. KPMG Law – AI Act & HR (2024):
   [https://kpmg-law.de/en/ai-and-employment-law-what-the-ai-act-means-for-hr/](https://kpmg-law.de/en/ai-and-employment-law-what-the-ai-act-means-for-hr/)
7. LinkedIn Economic Graph – Skills-Based Hiring Report (2025):
   [https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/skills-based-hiring-march-2025.pdf](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/skills-based-hiring-march-2025.pdf)
8. Workday – Skills Cloud (Skills-first / Hiring):
   [https://www.workday.com/en-us/products/human-capital-management/skills-cloud.html](https://www.workday.com/en-us/products/human-capital-management/skills-cloud.html)
9. HireVue – Removal of visual/facial analysis (2021):
   [https://www.hirevue.com/blog/hiring/industry-leadership-new-audit-results-and-decision-on-visual-analysis](https://www.hirevue.com/blog/hiring/industry-leadership-new-audit-results-and-decision-on-visual-analysis)
10. Wired – HireVue stops facial analysis (2021):
    [https://www.wired.com/story/job-screening-service-halts-facial-analysis-applicants/](https://www.wired.com/story/job-screening-service-halts-facial-analysis-applicants/)

---

## Zettelkasten-Notizen

> [!tip] Interne Links (für Obsidian/Quartz)
>
> * [[KI-gestütztes Recruiting]]
> * [[Automated Screening]]
> * [[Semantic Search]]
> * [[Bias in Algorithmen]]
> * [[ATS-Optimierung]]
> * [[Transparenzpflicht]]
> * [[Authentizität im Bewerbungsprozess]]
> * [[AI Video Interviews]]
> * [[EU AI Act für HR]]
> * [[DSGVO Artikel 22]]
> * [[Digital Garden]]
> * [[Work Samples statt Bauchgefühl]]

---

## Fußnoten

[^aiact]: EU AI Act Service Desk – Timeline (Stufen: 02.02.2025 / 02.08.2025 / 02.08.2026 / 02.08.2027).

[^annex]: EU AI Act Service Desk – Annex III: High-Risk Use Cases (inkl. Employment/Recruiting/Selection).

[^kpmg]: KPMG Law – Einordnung HR-Systeme als (oft) High-Risk nach Annex III.

[^gdpr22]: DSGVO Art. 22 – „based solely on automated processing“ + Ausnahmen in Art. 22(2).

[^wp29]: WP29 Guidelines (WP251 rev.01) zu automatisierten Entscheidungen/Profiling (Art. 22) und Schutzmechanismen.

[^hamburg]: Hamburg DPA (2024) – Hinweise zu CV Parsing und möglicher Relevanz von Art. 22 bei zusätzlicher Analyse.

[^linkedin]: LinkedIn Economic Graph (2025) – Skills-based Hiring Report (Effekte von Skills-first Pools).

[^workday]: Workday Skills Cloud – Skills als gemeinsame Basis, u. a. für Hiring/Recruiting.

[^hirevue]: HireVue Blog (2021) – Entscheidung, Visual Analysis (Gesichts-Analyse) aus neuen Modellen zu entfernen.

[^wired]: Wired (2021) – Bericht über das Ende der Facial-Analysis-Komponente bei HireVue und Kritik am Ansatz.


<div style="display:none" id="seo-data">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist KI im Recruiting in Deutschland erlaubt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, grundsätzlich ist der Einsatz erlaubt. Da Recruiting-Systeme jedoch unter den EU AI Act als Hochrisiko-Anwendungen fallen, müssen Unternehmen strenge Anforderungen an Transparenz, Datenschutz (DSGVO) und menschliche Überprüfung erfüllen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der häufigste Fehler von Bewerbern im KI-gestützten Prozess?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der größte Fehler ist das reine Aufzählen von Keywords ohne Kontext. Moderne Systeme nutzen Semantic Search; daher sollten Bewerber 'Contextual Proof' liefern – also konkrete Projekte, messbare Ergebnisse und methodisches Vorgehen beschreiben."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der größte Fehler von Unternehmen beim Einsatz von Recruiting-KI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blindes Vertrauen in den Algorithmus ('Die KI hat entschieden'). Ohne menschliche Kontrolle (Human Review), regelmäßige Bias-Audits und klare Dokumentation riskieren Unternehmen rechtliche Probleme und den Verlust von qualifizierten Talenten."
      }
    },
    {
      "@type": "Question",
      "name": "Sollten Bewerber KI-Tools wie ChatGPT für ihre Bewerbung nutzen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KI sollte als Editor zur Verbesserung von Struktur und Klarheit genutzt werden, nicht als Ghostwriter. Rein KI-generierte Texte wirken oft generisch und verlieren die persönliche Authentizität, die für die finale menschliche Entscheidung entscheidend ist."
      }
    }
  ]
}
</div>

<script>
  const schemaData = document.getElementById('seo-data').innerText;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = schemaData;
  document.head.appendChild(script);
</script>