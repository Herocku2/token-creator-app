import React from "react";
import { Link } from "react-router-dom";
import { Heder } from "../../components/Heder";
import { BanerMovil } from "../../components/BanerMovil";
import { useLanguage } from "../../components/Menu/Menu";
import "./style.css";

export const PublishWrapper = () => {
  const { language, translations } = useLanguage();
  const t = translations[language];
  
  const publishTranslations = {
    en: {
      officialProfileLink: 'Official profile link.',
      officialWebLink: 'Official website link.',
      contactEmail: 'Contact Email:',
      provideEmail: 'Provide a contact email for inquiries or issues.',
      supportChannelLink: 'Support Channel Link (Telegram):',
      supportChannelDesc: 'Link to an official channel where participants can receive support.',
      smartContractAudit: 'Smart Contract Audit:',
      auditInfo: 'Include information about whether the smart contract has been audited by an external firm.',
      back: 'Back',
      send: 'Send'
    },
    es: {
      officialProfileLink: 'Enlace a perfil oficial.',
      officialWebLink: 'Enlace a la web oficial.',
      contactEmail: 'Correo de Contacto:',
      provideEmail: 'Proveer un correo electrónico de contacto para consultas o problemas.',
      supportChannelLink: 'Enlace al Canal de Soporte (Telegram):',
      supportChannelDesc: 'Enlace a un canal oficial donde los participantes puedan recibir soporte.',
      smartContractAudit: 'Auditoría de Smart Contract:',
      auditInfo: 'Incluir la información sobre si el contrato inteligente ha sido auditado por una firma externa.',
      back: 'Atrás',
      send: 'Enviar'
    }
  };
  
  const pt = publishTranslations[language];
  return (
    <div className="publish-wrapper screen-wrapper">
      <Heder
        className="heder-instance"
        to="/vote"
        to1="/publish1"
        to2="/homeu47all"
        to3="/swap"
        to4="/create1"
        to5="/news"
      />

      <div className="titulo-pagina-13" />

      <BanerMovil className="baner-movil-14" frame="/img/frame-31-10.svg" />
      <div className="frame-162">
        <div className="frame-163">
          <div className="frame-164">
            <div className="frame-165">
              <div className="text-wrapper-131">1</div>
            </div>
          </div>

          <img className="line-9" alt="Line" src="/img/line-10-3.svg" />

          <div className="frame-164">
            <div className="frame-166">
              <div className="text-wrapper-132">2</div>
            </div>
          </div>

          <img className="line-9" alt="Line" src="/img/line-10-2.svg" />

          <div className="frame-164">
            <div className="frame-167">
              <div className="text-wrapper-133">3</div>
            </div>
          </div>
        </div>

        <div className="frame-168">
          <div className="frame-169">
            <div className="frame-170">
              <div className="text-wrapper-134">Twitter:</div>

              <div className="rectangle-21" />

              <div className="text-wrapper-135">{pt.officialProfileLink}</div>
            </div>

            <div className="frame-170">
              <div className="text-wrapper-134">Telegram:</div>

              <div className="rectangle-21" />

              <div className="text-wrapper-135">{pt.officialProfileLink}</div>
            </div>
          </div>

          <div className="frame-169">
            <div className="frame-171">
              <div className="text-wrapper-134">LinkedIn:</div>

              <div className="rectangle-21" />

              <div className="text-wrapper-135">{pt.officialProfileLink}</div>
            </div>

            <div className="frame-171">
              <div className="text-wrapper-134">Discord:</div>

              <div className="rectangle-21" />

              <div className="text-wrapper-135">{pt.officialProfileLink}</div>
            </div>
          </div>

          <div className="frame-169">
            <div className="frame-171">
              <div className="text-wrapper-134">Facebook:</div>

              <div className="rectangle-21" />

              <div className="text-wrapper-135">{pt.officialProfileLink}</div>
            </div>

            <div className="frame-171">
              <div className="text-wrapper-134">Web::</div>

              <div className="rectangle-21" />

              <p className="text-wrapper-135">{pt.officialWebLink}</p>
            </div>
          </div>

          <div className="frame-169">
            <div className="frame-171">
              <div className="text-wrapper-134">{pt.contactEmail}</div>

              <div className="rectangle-21" />

              <p className="text-wrapper-135">
                {pt.provideEmail}
              </p>
            </div>

            <div className="frame-171">
              <p className="text-wrapper-134">
                {pt.supportChannelLink}
              </p>

              <div className="rectangle-21" />

              <p className="text-wrapper-135">
                {pt.supportChannelDesc}
              </p>
            </div>
          </div>

          <div className="frame-169">
            <div className="frame-171">
              <div className="text-wrapper-134">
                {pt.smartContractAudit}
              </div>

              <div className="rectangle-22" />

              <p className="text-wrapper-136">
                {pt.auditInfo}
              </p>
            </div>
          </div>
        </div>

        <div className="frame-172">
          <Link className="frame-173" to="/publish2">
            <div className="text-wrapper-137">{pt.back}</div>
          </Link>

          <Link className="frame-173" to="/publish4">
            <div className="text-wrapper-137">{pt.send}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
