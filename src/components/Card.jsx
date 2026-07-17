/* eslint-disable react/prop-types */
const Card = ({
  title,
  description,
  features = [],
  tags = [],
  btn1Url,
  btn2Url,
  btnText,
  btn2Text,
  image,
}) => {
  return (
    <div className="group border border-border rounded p-5 hover:border-brass/30 transition-all duration-300 flex flex-col min-h-[20rem] bg-card">
      {image ? (
        <div className="relative w-full h-44 mb-4 overflow-hidden rounded">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={image}
            alt={title}
          />
        </div>
      ) : null}

      <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
        {title}
      </h3>

      {description && !image && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-3">
        {tags.slice(0, 4).map((tag, index) => (
          <span
            key={index}
            className="px-2 py-0.5 text-[11px] font-mono font-medium text-muted-foreground bg-secondary rounded"
          >
            {tag}
          </span>
        ))}
        {tags.length > 4 && (
          <span className="text-[11px] text-muted-foreground">+{tags.length - 4}</span>
        )}
      </div>

      {features.length > 0 && (
        <ul className="mt-3 space-y-1 flex-grow">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <span className="text-brass mt-0.5">&#8212;</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4 flex gap-2 border-t border-border">
        {btn1Url && (
          <a
            href={btn1Url}
            className="flex-1 text-center py-2 text-xs font-medium rounded border border-border text-muted-foreground hover:border-brass hover:text-brass transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnText || 'Code'}
          </a>
        )}
        {btn2Text && btn2Url && (
          <a
            href={btn2Url}
            className="flex-1 text-center py-2 text-xs font-medium rounded bg-brass text-white hover:bg-[#B08830] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btn2Text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
