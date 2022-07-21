import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const EduCopyBtn = ({url}) => {
  const [copy,setCopy] = useState(false);

  const onCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 1500)
  }
    return(
          <div className='copy_area'>
            <CopyToClipboard onCopy={onCopy} text={url} >
              <button className='copy_btn'>URL 복사</button>
            </CopyToClipboard>
            { copy ?
              <span className='copy_message'>주소가 복사되었습니다.</span>
              :
              null
            }
          </div>
    )
  }

  export default EduCopyBtn;