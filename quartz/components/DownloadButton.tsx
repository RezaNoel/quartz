import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const DownloadButton: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const repository = "https://github.com/RezaNoel/quartz"
  const branch = "v4"
  
  const filePath = fileData.filePath
  const downloadUrl = `${repository}/raw/${branch}/${filePath}`

  return (
    <div className={classNames(displayClass, "download-button")}>
      <a
        href={downloadUrl}
        download
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "5px 10px",
          backgroundColor: "var(--lightgray)",
          borderRadius: "5px",
          fontSize: "0.8rem",
          textDecoration: "none",
          color: "var(--dark)",
          border: "1px solid var(--gray)"
        }}
      >
        <span>📥 Download .md</span>
      </a>
    </div>
  )
}

export default (() => DownloadButton) satisfies QuartzComponentConstructor
