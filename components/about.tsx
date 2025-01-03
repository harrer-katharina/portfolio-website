"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Über mich</SectionHeading>
      <p className="mb-3">
        In meinem bisherigen{" "}
        <span className="font-medium">Studium der Medieninformatik</span> an der
        TH Nürnberg habe ich bereits umfangreiche Kenntnisse in theoretischen
        Grundlagen, praktischer Informatik und digitalen Medien erworben. Die
        Anwendung, Vertiefung und Erweiterung dieses Wissens bereitet mir große
        Freude. Daher habe ich mich entschlossen, nach meinem Bachelorabschluss
        den{" "}
        <span className="font-medium">
          Master im Studiengang Interactive Technologies (Schwerpunkt Mobile)
        </span>{" "}
        an der FH St. Pölten zu verfolgen. Ich lerne gerne neue Technologien und
        suche aktuell eine{" "}
        <span className="font-medium">
          Teilzeitstelle als Frontend-Entwicklerin.
        </span>
      </p>

      <p>
        <span className="italic">In meiner Freizeit</span> interessiere ich mich
        für Nachhaltigkeit, veganes Kochen wie auch Backen und gehe gerne in der
        Natur Fahrradfahren oder Wandern.
      </p>
    </motion.section>
  );
}
