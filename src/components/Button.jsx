export default function Button({ label, variant = "" }) {
    const buttonColor = variant === "primary" ? "blue" : "red";
    
    return (
        <button style={{padding: '10px', backgroundColor: buttonColor, color: "#fff"}}>{label}</button>
    );
}