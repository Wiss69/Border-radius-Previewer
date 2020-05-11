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
        if(Number(value) || value ==='0') {
            console.log(value);
            previewerBox.style.borderTopLeftRadius= borderTopLeft.value + 'px';
            previewerBox.style.borderTopRightRadius= borderTopRight.value + 'px';
            previewerBox.style.borderBottomRightRadius= borderBottomRight.value + 'px';
            previewerBox.style.borderBottomLeftRadius= borderBottomLeft.value + 'px';
            
            clipboardInput.value = `border-radius: ${borderTopLeft.value}px ${borderTopRight.value}px ${borderBottomRight.value}px ${borderBottomLeft.value}px;`;

        }
        else {
            previewerBox.style.borderRadius = '0';
        }
        
});

copyTextEl.addEventListener('click', e =>
{
    clipboardInput.select();
    clipboardInput.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    console.log(clipboardInput.value);
});