import React from 'react';
import { Reveal } from '../Reveal';
import { images, invitation } from '../../data/invitation';

export function CoverPhotoSection() {
  if (!images.couple) return null;

  return (
    <section className="bg-paper pb-4" aria-label="The Couple">
      <Reveal className="relative">
        <img
          src={images.couple}
          alt={`${invitation.groom} and ${invitation.bride}`}
          loading="lazy"
          className="block aspect-[2/3] w-full object-cover" />
        
        <div className="pointer-events-none absolute inset-3 border border-gold/40" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-paper" aria-hidden="true" />
      </Reveal>

      <Reveal className="relative z-10 mt-2 px-6 text-center" delay={0.1}>
        <p className="whitespace-nowrap font-script text-[clamp(2rem,9.5vw,2.6rem)] leading-tight text-ink">{invitation.groom}</p>
        <p className="font-script text-2xl leading-none text-gold-dark">&amp;</p>
        <p className="whitespace-nowrap font-script text-[clamp(2rem,9.5vw,2.6rem)] leading-tight text-ink">{invitation.bride}</p>
        <p className="mt-3 font-display text-sm tracking-[0.4em] text-ink-soft">{invitation.dateShort}</p>
      </Reveal>
    </section>);

}
