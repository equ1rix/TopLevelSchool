const PointIcon = ({ height = "50", width = "50", fill = "#990000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25s8.75 3.994 8.75 8.893c0 2.365-.674 4.905-1.866 7.099c-1.19 2.191-2.928 4.095-5.103 5.112a4.2 4.2 0 0 1-3.562 0c-2.175-1.017-3.913-2.92-5.103-5.112c-1.192-2.194-1.866-4.734-1.866-7.099M12 2.75c-3.992 0-7.25 3.297-7.25 7.393c0 2.097.603 4.392 1.684 6.383c1.082 1.993 2.612 3.624 4.42 4.469a2.7 2.7 0 0 0 2.291 0c1.809-.845 3.339-2.476 4.421-4.469c1.081-1.99 1.684-4.286 1.684-6.383c0-4.096-3.258-7.393-7.25-7.393m-1.033 3.182a3.03 3.03 0 0 1 2.066 0l2.342.855c.541.198.875.68.875 1.213s-.334 1.015-.875 1.213l-.125.045V11.7c0 .673-.394 1.329-1.08 1.582c-.526.194-1.391.468-2.17.468s-1.644-.274-2.17-.468c-.686-.253-1.08-.909-1.08-1.582V9.258l-.125-.045C8.084 9.015 7.75 8.533 7.75 8s.334-1.015.875-1.213zm-.717 3.874V11.7c0 .105.057.159.1.175c.501.185 1.154.375 1.65.375s1.149-.19 1.65-.375c.043-.016.1-.07.1-.175V9.806l-.717.262a3.03 3.03 0 0 1-2.066 0zm2.269-2.465a1.53 1.53 0 0 0-1.038 0L9.677 8l1.804.66c.332.12.707.12 1.038 0L14.323 8z"
      clip-rule="evenodd"
    />
  </svg>
);

export default PointIcon;
