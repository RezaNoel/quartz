import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function Analytics() {
    return (
      <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPV00835CQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RPV00835CQ');
            `,
          }}
        />
      </>
    )
  }

  return Analytics
}) satisfies QuartzComponentConstructor