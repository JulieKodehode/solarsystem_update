// Libraries
import React from "react";

// CSS
import "./layout.module.css";

// Components

/**
 * This is the default home page.
 */
const HomePage = () => {
	return (
		<main>
			<div id="landingpage">
				{/* <!-- Intro--> */}
				<div className="intro">
					<h1>Vårt solsystem</h1>
					<p className="info-box">
						Solsystemet er det sol-planetsystemet som består av solen, jorden og månen, og andre kjente
						himmellegemer i det nærmeste verdensrommet. I dette systemet er solen i sentrum med de
						himmellegemer som den binder til seg gjennom gravitasjon, og har sin opprinnelse i en
						gravitasjonskollaps av en gigantisk gass- og støvsky for 4,6 milliarder år siden. Solsystemet
						befinner seg i Orion-armen i galaksen Melkeveien.
					</p>
				</div>
				{/* <!-- /Intro --> */}
				{/* <!-- Image --> */}
				<div className="image">
					<img src="" alt="" />
				</div>
				{/* <!-- /Image --> */}
				{/* <!-- Info --> */}
				<div className="info">
					<p className="info-box | size">
						Rundt solen kretser en rekke himmellegemer i en nærmest flat skive i ekvatorbaneplanet som
						kalles ekliptikken. Utenfor solen finnes det meste av solsystemets masse i de åtte planetene,
						som har tilnærmet sirkulære omløpsbaner. De fire indre planetene Merkur, Venus, jorden og Mars
						består i stor grad av stein og metall og kalles steinplanetene.
						<br />
						<br />
						De fire ytre planetene Jupiter, Saturn, Uranus og Neptun består i stor grad av hydrogen og
						helium. De kalles ofte gasskjempene, da de har en mye tykkere atmosfære bestående av ulike
						gasser, og de er i tillegg mye tyngre og større enn steinplanetene.
					</p>
					<p className="info-box | size">
						Det finnes to områder med mindre himmellegemer. Asteroidebeltet mellom Mars og Jupiter består
						av mindre legemer av metall og stein slik som steinplanetene. Kuiperbeltet utenfor Neptuns
						omløpsbane består hovedsakelig av himmellegemer av frossent vann, ammoniakk og metan. Innenfor
						disse beltene er det kjent ti større objekter, Ceres, Pluto, Haumea, Makemake, Eris, Orcus,
						Quaoar, Varuna, Sedna og (225088) 2007 OR 10.
						<br />
						<br />
						De kalles dvergplaneter siden de er store nok til å ha blitt runde som en følge av sin
						gravitasjon. I en avstand av 0,8-1,6 lysår fra solen antar man at det finnes en Oorts sky, som
						kan være opprinnelsen til de langperiodiske kometene.
					</p>
					<p className="info-box | size">
						Talløse mindre legemer som kometer, kentaurer, damokloider og interplanetariske støvpartikler
						følger sine egne baner gjennom solsystemet. Solvinden, en strøm av plasma fra solen, skaper en
						boble i den interplanetariske materien som også kalles heliosfæren.
						<br />
						<br />
						Den strekker seg ut til midten av det området som kalles den spredte skiven, et område i
						tilknytting til Kuiperbeltet. Seks planeter og tre dvergplaneter har naturlige satellitter
						(måner) i omløpsbane rundt seg. De fire ytre planetene har ringer av støv og andre partikler
						rundt seg.
					</p>
				</div>
				{/* <!-- /Info --> */}
				{/* <!-- Informasjon funnet på: https://no.wikipedia.org/wiki/Solsystemet --> */}
			</div>
		</main>
	);
};

export default HomePage;
