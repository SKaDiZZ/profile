export const SkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="sk-button">
      <span className="sk-button-inner">
        <span className="sk-button-title">{children}</span>
      </span>
      <span className="sk-button-glow"></span>
    </button>
  );
};
