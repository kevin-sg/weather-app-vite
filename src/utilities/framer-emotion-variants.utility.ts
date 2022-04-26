import type { Variants } from 'framer-motion';

// Animate with framer-emotion
// Doc: https://www.framer.com/docs/

export const itemVariantsButton: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4
    }
  },
  remove: { opacity: 0, scale: 0.8 }
};

export const itemVariantsFecture: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export const itemVariantsCard: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export const containerVariantsCard: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  },
  remove: { opacity: 0 }
};

export const containerVariantsFecture: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  }
};

export const containerVariantsToast: Variants = {
  hidden: { opacity: 0.2, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4
    }
  },
  remove: { opacity: 0, y: 80 }
};

export const containerVariantsSbrDropdown: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4
    }
  },
  remove: {
    x: '-100%',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4
    }
  }
};

export const containerVariantsLayout: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.2 }
  },
  exit: { opacity: 0 }
};
