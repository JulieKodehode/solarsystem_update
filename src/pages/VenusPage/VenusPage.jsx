// Libraries
import React from "react";

// CSS
import "./layout.module.css";

// Components

/**
 * This is the default venus page.
 */
const VenusPage = () => {
	return (
		<main>
			<div>
				<img src="" alt="" />
			</div>

			<div>
				<h2>Venus</h2>
				<p>
					Venus (symbol:
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Venus_symbol_%28fixed_width%29.svg/23px-Venus_symbol_%28fixed_width%29.svg.png"
						alt="Det astronomiske symbolet for Venus"
					/>
					) er den andre planeten fra solen og den tredje minste i solsystemet. Planeten er oppkalt etter
					Venus, den romerske gudinnen for kjærlighet, skjønnhet og fruktbarhet. Den italienske fysikeren
					Galileo Galilei oppdaget tidlig på 1600-tallet at planeten hadde faser som månen. Dette var
					blant de første observasjonene som klart motsa Ptolemaios' geosentriske modell som plasserte
					jorden som midtpunkt i universet, og lot solen og de andre planetene rotere rundt jorden.
				</p>
				<p>
					Etter månen er Venus det mest lyssterke naturlige objektet på nattehimmelen og den er lys nok
					til å kaste skygger. Siden Venus er en nedre planet (nærmere solen enn jorden er), synes den
					aldri å være langt unna solen. Hvis man er langt nok mot nord (for eksempel Tromsø) på jorden
					er Venus i visse perioder sirkumpolar og synlig hele natten. Det samme er tilfelle i visse
					andre perioder hvis man er langt nok mot sør på jorden. Den kalles Aftenstjernen når den er
					synlig etter solnedgang og Morgenstjernen når den er synlig før soloppgang.
				</p>
				<p>
					Venus er en terrestrisk planet og blir noen ganger kalt jordens «søsterplanet» på grunn av
					relativt lik størrelse, gravitasjon og sammensetning. Et ugjennomsiktig lag med svært
					reflektive skyer av svovelsyre hindrer overflaten i å bli sett i synlig lys fra verdensrommet.
					Venus har den tetteste atmosfæren av alle de terrestriske planetene i solsystemet; dens
					atmosfære består hovedsakelig av karbondioksid.
				</p>
				<p>
					Venus har ikke noe karbonkretsløp som holder karbon igjen i steiner og andre
					overflatestrukturer, og det ser heller ikke ut til at noe organisk liv absorberer karbonet i
					biomasse. Overflaten er et støvete, tørt ørkenlandskap med mange platelignende steiner som
					periodisk fornyes av vulkanisme.
				</p>
			</div>
		</main>
	);
};

export default VenusPage;
