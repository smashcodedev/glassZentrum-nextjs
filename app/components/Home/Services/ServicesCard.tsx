import Image from "next/image";
import Link from "next/link";
import { Service } from "@/app/data/Services";
import { motion } from "framer-motion";

const ServiceCard: React.FC<Service> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <article className="h-full bg-white rounded-2xl overflow-hidden shadow-[0_6px_30px_rgba(18,18,18,0.06)] flex flex-col justify-between">
        <div className="relative w-full h-44 sm:h-52 md:h-48 lg:h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-7 flex flex-col flex-grow justify-between">
          <div>
            <h3
              className="text-[18px] md:text-[20px] font-semibold text-[#000] leading-[28px] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h3>
            <p
              className="text-sm text-[#6b6b6b] mb-6 line-clamp-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>
          </div>

          {/* Action */}
          <Link
            href={href}
            aria-label={`Read more about ${title}`}
            className="inline-flex bg-[#F7F7F7] items-center justify-center w-10 h-10 rounded-full transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <img src="/images/services/arrow-right.svg" alt="arrow right" />
          </Link>
        </div>
      </article>
    </motion.div>
  );
};

export default ServiceCard;
