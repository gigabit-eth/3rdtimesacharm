// components/LoadingIndicator.tsx
export const LoadingIndicator = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <p className="text-white text-3xl font-mono italic">Loading...</p>
    </div>
  );
};
