import clsx from 'clsx';
import { motion } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.3 },
  show: (i: number) => {
    const delay = 0.1 + i * 0.12;
    return {
      pathLength: 1,
      transition: { pathLength: { delay, duration: 0.7 } },
    };
  },
};

interface HeroImageOutlineProps {
  onAnimationComplete?: () => void;
}

function HeroImageOutline({
  onAnimationComplete = () => {},
}: HeroImageOutlineProps) {
  return (
    <motion.svg
      width={590}
      height={590}
      viewBox="0 0 1254 1254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hide"
      animate="show"
      onAnimationComplete={onAnimationComplete}
      className={clsx('stroke-accent-500 opacity-60', 'dark:opacity-40')}
    >
      <motion.path variants={animation} custom={0} d="M384 73 L420 117 L382 121 L408 134 L395 138 L360 139 L334 132 L350 156 L369 174 L330 184 L300 181 L320 203 L342 218 L290 242 L265 243 L293 266 L317 277 L292 301 L274 311 L309 314 L296 338 L291 366 L313 350 L303 397 L321 385 L319 423 L331 413 L334 433 L338 434 L385 542 L359 557 L363 581 L376 591 L405 651 L436 670 L455 707 L503 736 L489 770 L494 798 L459 816 L441 834 L416 886 L397 907 L392 932 L370 971 L357 1006 L337 1028 L337 1058 L323 1111 L330 1152 L355 1188 L414 1203 L399 1253 L866 1253 L863 1240 L874 1205 L868 1151 L899 1049 L928 984 L938 943 L941 895 L933 857 L945 818 L946 799 L923 759 L926 714 L920 691 L884 675 L826 666 L846 643 L877 645 L918 624 L946 596 L962 563 L962 516 L952 495 L934 479 L947 414 L952 347 L955 348 L952 311 L964 316 L948 273 L972 274 L937 239 L957 241 L914 202 L944 189 L884 174 L908 143 L861 161 L863 127 L858 99 L844 137 L829 108 L785 63 L792 106 L761 81 L708 54 L687 37 L699 75 L661 58 L605 47 L585 47 L611 65 L612 71 L567 68 L534 53 L505 31 L519 79 L436 83 Z" />
    </motion.svg>
  );
}

export default HeroImageOutline;
