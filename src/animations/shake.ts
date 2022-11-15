const SHAKE_KEYFRAMES = [
  { transform: 'translate3d(-1px, 0, 0)' },
  { transform: 'translate3d(2px, 0, 0)' },
  { transform: 'translate3d(-4px, 0, 0)' },
  { transform: 'translate3d(4px, 0, 0)' },
  { transform: 'translate3d(0, 0, 0)' },
];

const SHAKE_OPTIONS: any = {
  duration: 350,
  iterations: 1,
  easing: 'linear',
  direction: 'alternate',
  fill: 'forwards',
};

export function shake(element: HTMLElement) {
  element.animate(SHAKE_KEYFRAMES, SHAKE_OPTIONS);
}
