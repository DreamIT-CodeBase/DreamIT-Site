import "@mdxeditor/editor/style.css";
import MdxEditorComponent from "./MdxEditorComponent";
 
export const SectionContent = ({ editor, sections }: any) => {
  return (
    <>
      {sections?.map((section:any) => (
        <>
          {editor === "mdx" ? (
            <MdxEditorComponent
              readOnly
              dataTest="mdx"
              value={section.content}
            />
          ) : (
            <>
              <div
                data-test="rte"
                dangerouslySetInnerHTML={{
                  __html: section.content,
                }}
                className="ql-editor"
              ></div>
              
            </>
          )}
        </>
      ))}
    </>
  );
};
