import type { ReactElement } from 'react';

function Footer(): ReactElement {
  return (
    <footer className="mb-5">
      <p className="text-center text-sm font-light text-gray-500/70 dark:text-white/40">
        Copyright &copy; {new Date().getFullYear()} by{' '}
        <a href="https://github.com/kevin-sg" target="_blank" rel="noopener noreferrer" className="underline">
          KevinSG
        </a>{' '}
        -{' '}
        <a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer" className="underline">
          devChallenges.io
        </a>
      </p>
    </footer>
  );
}

export default Footer;
