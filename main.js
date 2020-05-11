const borderTopLeft = document.querySelector('#top-left');
const borderTopRight = document.querySelector('#top-right');
const borderBottomRight = document.querySelector('#bottom-right');
const borderBottomLeft = document.querySelector('#bottom-left');
const previewerBox = document.querySelector('.previewer-box');
const clipboardInput = document.querySelector('#clipboardInput');
const copyTextEl = document.querySelector('#copyText');
document.addEventListener('input', e =>
{
        const value = e.target.value;
        console.log(value);
        if(Number(value) || value ==='0') {
            previewerBox.style.borderTopLeftRadius= borderTopLeft.value + 'px';
            previewerBox.style.borderTopRightRadius= borderTopRight.value + 'px';
            previewerBox.style.borderBottomRightRadius= borderBottomRight.value + 'px';
            previewerBox.style.borderBottomLeftRadius= borderBottomLeft.value + 'px';
            
        }

        if(value ==='0') {
            // e.target.value = '0';
            console.log(e.target.value);
        }

        if(borderTopLeft.value == ''){
            previewerBox.style.borderTopLeftRadius= '0';
            console.log(borderTopLeft.value || '0');
        }
        if(borderTopRight.value == ''){
            previewerBox.style.borderTopRightRadius= '0';
        }
        if(borderBottomRight.value == ''){
            previewerBox.style.borderBottomRightRadius= '0';
        }
        if(borderBottomLeft.value == ''){
            previewerBox.style.borderBottomLeftRadius= '0';
        }

        clipboardInput.value = `border-radius: ${borderTopLeft.value || '0'}px ${borderTopRight.value || '0'}px ${borderBottomRight.value || '0'}px ${borderBottomLeft.value || '0'}px;`;
});

copyTextEl.addEventListener('click', e =>
{
    clipboardInput.select();
    clipboardInput.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    console.log(clipboardInput.value);
});