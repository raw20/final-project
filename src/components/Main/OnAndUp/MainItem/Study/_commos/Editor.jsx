import React, { useEffect, useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getItem } from '../lib/storage';

function Editor({ id, data, setEditorData }) {

    function handleChange(EditorData) {
        setEditorData({ id: parseInt(id), content: EditorData})
    }

    return (
        <>
        <div style={{ marginTop: 50 }}>
            <CKEditor
                editor={ ClassicEditor }
                data= { data }
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }  
                onChange={ ( event, editor ) => {
                    const EditorData = editor.getData();
                    handleChange(EditorData);
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
        </>
    );
}

export default Editor;