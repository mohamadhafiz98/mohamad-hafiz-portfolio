type Orb = {
  top: string;
  left: string;
  color: string;
};

const ORBS: Orb[] = [
  { top: "8%", left: "5%", color: "#ecece8" },
  { top: "25%", left: "78%", color: "#e8e8e3" },
  { top: "52%", left: "12%", color: "#efefeb" },
  { top: "64%", left: "66%", color: "#e6e6e1" },
  { top: "80%", left: "36%", color: "#ebebe6" },
  { top: "18%", left: "46%", color: "#e7e7e2" },
];

export default function FloatingOrbs() {
  return (
    <>
      {ORBS.map((orb, index) => (
        <div
          key={`${orb.color}-${index}`}
          className="pointer-events-none absolute hidden rounded-full blur-[100px] md:block"
          style={{
            width: "180px",
            height: "180px",
            backgroundColor: orb.color,
            top: orb.top,
            left: orb.left,
            opacity: 0.24,
          }}
        />
      ))}
    </>
  );
}
