import xpErrorSound from "@/assets/sounds/exclamation.mp3";
import xpnotification from "@/assets/sounds/notify.mp3";

export const SOUNDS = [
  { id: 'xp-error', src: xpErrorSound },
  { id: 'xp-notification', src: xpnotification }
];

export const getSoundSrc = (id: string) => SOUNDS.find(s => s.id === id)?.src;