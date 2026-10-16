import Photo from "./Photo";

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-navy">
      <Photo
        image={image}
        eager
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/35" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-orange uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        {text ? <p className="mt-4 max-w-2xl text-lg text-white/80">{text}</p> : null}
      </div>
    </section>
  );
}
