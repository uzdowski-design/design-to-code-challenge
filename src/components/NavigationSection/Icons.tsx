export const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    fill="none"
    viewBox="0 0 20 19"
    {...props} // Spread props to allow customization
  >
    <path
      fill="#443B3B"
      d="M6.321 19q-.783 0-1.34-.558a1.83 1.83 0 0 1-.559-1.342q0-.784.559-1.342a1.83 1.83 0 0 1 1.34-.558q.784 0 1.341.558.558.559.558 1.342t-.558 1.342a1.83 1.83 0 0 1-1.34.558m9.496 0q-.785 0-1.341-.558a1.83 1.83 0 0 1-.558-1.342q0-.784.558-1.342a1.83 1.83 0 0 1 1.34-.558q.784 0 1.342.558.558.559.558 1.342t-.558 1.342Q16.6 19 15.818 19M10.404 6.935a.9.9 0 0 1-.26-.665q0-.404.26-.665l.831-.855H8.22a.92.92 0 0 1-.676-.273.92.92 0 0 1-.273-.677.92.92 0 0 1 .273-.677.92.92 0 0 1 .676-.273h3.015l-.854-.855a.87.87 0 0 1-.273-.665.95.95 0 0 1 .296-.665q.285-.26.665-.274a.87.87 0 0 1 .665.274l2.469 2.47a.84.84 0 0 1 .202.309q.059.166.059.356t-.06.356a.84.84 0 0 1-.201.309l-2.47 2.47a.93.93 0 0 1-.652.273.88.88 0 0 1-.677-.273M6.321 14.25q-1.091 0-1.65-.939-.557-.937-.011-1.864L5.94 9.12 2.523 1.9h-.95a.92.92 0 0 1-.676-.274A.92.92 0 0 1 .624.95.92.92 0 0 1 .897.273.92.92 0 0 1 1.574 0h1.543q.261 0 .498.143t.356.403L7.793 8.55h6.647l3.394-6.151a.86.86 0 0 1 .345-.369.96.96 0 0 1 .486-.13q.546 0 .82.475a.91.91 0 0 1 .011.95l-3.394 6.128a1.93 1.93 0 0 1-.689.736q-.428.261-.973.261H7.366l-1.045 1.9h10.445q.405 0 .676.273a.92.92 0 0 1 .274.677q0 .405-.274.676a.92.92 0 0 1-.676.274z"
    ></path>
  </svg>
);

export const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    fill="none"
    viewBox="0 0 20 19"
    {...props}
  >
    <path
      fill="#443B3B"
      d="M10.124 9.5a4.75 4.75 0 0 0 4.75-4.75A4.75 4.75 0 0 0 10.124 0a4.75 4.75 0 0 0-4.75 4.75 4.75 4.75 0 0 0 4.75 4.75m0 2.375c-3.17 0-9.5 1.591-9.5 4.75V19h19v-2.375c0-3.159-6.33-4.75-9.5-4.75"
    ></path>
  </svg>
);

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    fill="none"
    viewBox="0 0 20 19"
    {...props}
  >
    <path
      fill="#443B3B"
      d="M14.203 11.95h-.858l-.304-.294a7.03 7.03 0 0 0 1.705-4.595 7.061 7.061 0 1 0-7.06 7.061 7.03 7.03 0 0 0 4.594-1.705l.294.304v.858L18.005 19l1.619-1.619zm-6.518 0A4.88 4.88 0 0 1 2.797 7.06a4.88 4.88 0 0 1 4.888-4.888 4.88 4.88 0 0 1 4.889 4.888 4.88 4.88 0 0 1-4.889 4.889"
    ></path>
  </svg>
);

export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    fill="none"
    viewBox="0 0 23 23"
    {...props}
  >
    <path
      fill="#CAE771"
      d="M9.881 18.812h-1.87V3.838h1.87v1.871h1.87v2.808h1.87v1.872h1.87v1.872h-1.87v1.872h-1.87v2.807h-1.87z"
    ></path>
  </svg>
);

export const PauseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    fill="none"
    stroke="#CAEA71"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="lucide lucide-pause"
    viewBox="0 0 23 23"
    {...props}
  >
    <rect width="4" height="16" x="14" y="4" rx="1"></rect>
    <rect width="4" height="16" x="5" y="4" rx="1"></rect>
  </svg>
);
