import { motion } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  goldWords?: string[];
}

const StaggeredText = ({ text, className = "", delay = 0, as: Tag = "h2", goldWords = [] }: StaggeredTextProps) => {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.3em] ${goldWords.includes(word) ? "text-gradient-gold" : ""}`}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.06,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export default StaggeredText;
