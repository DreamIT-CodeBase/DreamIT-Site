import React from "react";
import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    codeBlockPlugin,
    codeMirrorPlugin,
    CodeToggle,
    CreateLink,
    diffSourcePlugin,
    DiffSourceToggleWrapper,
    frontmatterPlugin,
    headingsPlugin,
    imagePlugin,
    InsertCodeBlock,
    InsertFrontmatter,
    InsertImage,
    InsertSandpack,
    InsertTable,
    InsertThematicBreak,
    linkDialogPlugin,
    listsPlugin,
    ListsToggle,
    MDXEditor,
    quotePlugin,
    SandpackConfig,
    sandpackPlugin,
    StrikeThroughSupSubToggles,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo,
    linkPlugin
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello FAB Builder</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig: SandpackConfig = {
    defaultPreset: "react",
    presets: [
        {
            label: "React",
            name: "react",
            meta: "live react",
            sandpackTemplate: "react",
            sandpackTheme: "light",
            snippetFileName: "/App.js",
            snippetLanguage: "jsx",
            initialSnippetContent: defaultSnippetContent,
        },
    ],
};

const MdxEditorComponent = (props: any) => {
    const {
        placeholder,
        readOnly,
        value,
        onChange,
        dataTest,
        showToolbar = false,
    } = props;
    if (typeof window === 'undefined') {
        return <div
            dangerouslySetInnerHTML={{
                __html: value,
            }}
        ></div>
    }
    return (
        <MDXEditor
            data-test={dataTest}
            placeholder={placeholder || "..."}
            readOnly={readOnly}
            markdown={value || ""}
            plugins={[
                linkPlugin(),
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                linkDialogPlugin(),
                diffSourcePlugin({
                    diffMarkdown: "An older version",
                    viewMode: "rich-text",
                }),
                frontmatterPlugin(),
                imagePlugin(),
                tablePlugin(),
                // for code block
                codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
                sandpackPlugin({
                    sandpackConfig: simpleSandpackConfig,
                }),
                codeMirrorPlugin({
                    codeBlockLanguages: {
                        js: "JavaScript",
                        javascript: "React/React Native",
                        css: "CSS",
                        text: "Text",
                        dart: "Dart/Flutter",
                    },
                }),
                //for code block
                showToolbar &&
                toolbarPlugin({
                    toolbarClassName: "my-classname",
                    toolbarContents: () => (
                        <>
                            <UndoRedo />
                            <BoldItalicUnderlineToggles />
                            <StrikeThroughSupSubToggles />
                            <BlockTypeSelect />
                            <CodeToggle />
                            <CreateLink />
                            {/* <ChangeAdmonitionType /> */}
                            {/* <ChangeCodeMirrorLanguage /> */}
                            {/* <InsertAdmonition /> */}
                            <InsertCodeBlock />
                            <InsertSandpack />
                            <InsertFrontmatter />
                            <InsertImage />
                            <InsertTable />
                            <InsertThematicBreak />
                            <ListsToggle />
                            <DiffSourceToggleWrapper>
                                <UndoRedo />
                            </DiffSourceToggleWrapper>
                        </>
                    ),
                }),
            ]}
            onChange={(value: any) => {
                if (onChange) {
                    onChange(value);
                }
            }}
        />
    );
};

export default MdxEditorComponent;