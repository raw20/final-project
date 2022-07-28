import React, { useEffect, useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getItem } from '../lib/storage';

function Editor({ id, isNew, data, addData, setData }) {

    function handleChange(EditorData) {
        if (isNew) {
            addData({ id: Number(id), content: EditorData})
        }
        else {
            setData({
                ...data,
                id: parseInt(id),
                content: EditorData,
            })
        }
    }

    return (
        <>
        <div>
            <CKEditor
                editor={ ClassicEditor }
                data= {data.content || ''}
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