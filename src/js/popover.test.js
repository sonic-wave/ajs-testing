/**
 * @jest-environment jsdom
 */

import { btn, popover, popoverFunc } from "./popover";

test('open popover', () => {
popoverFunc();
btn.click();

expect(popover.classList.contains('hidden')).toBe(false);
});
