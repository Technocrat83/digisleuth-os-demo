export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "32px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          padding: 32,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(34,211,238,0.12)",
            border: "1px solid rgba(34,211,238,0.25)",
            color: "#67e8f9",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Digisleuth OS
        </div>
        <h1 style={{ fontSize: 44, margin: "18px 0 12px" }}>
          Starter Visualization Shell
        </h1>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 18, lineHeight: 1.6 }}>
          Your deployment is working. This clean starter is ready to be upgraded into the
          full Digisleuth OS visualization layer.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            marginTop: 28,
          }}
        >
          {[
            ["Compiler", "Active"],
            ["ISA", "Ready"],
            ["Memory", "Ready"],
            ["MPL", "Ready"],
          ].map(([label, status]) => (
            <div
              key={label}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 18,
                padding: 18,
                background: "rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ fontSize: 12, textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                Module
              </div>
              <div style={{ fontSize: 22, marginTop: 8 }}>{label}</div>
              <div style={{ marginTop: 10, color: "#67e8f9" }}>{status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
