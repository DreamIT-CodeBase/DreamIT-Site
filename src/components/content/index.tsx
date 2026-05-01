import "@mdxeditor/editor/style.css";
import MdxEditorComponent from "./MdxEditorComponent";

export const SectionContent = ({ editor, sections }: any) => {
  return (
    <>
      {sections?.map((section: any, index: number) => {
        if (editor === "mdx") {
          return (
            <MdxEditorComponent
              key={index}
              readOnly
              dataTest="mdx"
              value={section.content}
            />
          );
        }

        if (editor === "html") {
          return (
            <div
              key={index}
              data-test="rte"
              dangerouslySetInnerHTML={{
                __html: section.content,
              }}
              className="ql-editor"
            ></div>
          );
        }

        if (editor === "summernote") {
          return (
            <div
              key={index}
              data-test="rte"
              dangerouslySetInnerHTML={{
                __html: section.content,
              }}
            ></div>
          );
        }

        return (
          <div
            key={index}
            data-test="rte"
            dangerouslySetInnerHTML={{
              __html: section.content,
            }}
          ></div>
        );
      })}
    </>
  );
};
