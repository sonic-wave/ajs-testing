export const btn = document.querySelector('.btn')
export const popover = document.querySelector('.popover')

export function popoverFunc() {
        btn.addEventListener('click', () => {
            popover.classList.toggle('hidden');
        })
}

popoverFunc();