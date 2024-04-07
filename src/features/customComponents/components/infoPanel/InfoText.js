import "./infoText.css"

export const InfoText = () => {
  return (
    <div className="infoWrapper">
      <p className="title">Instructions</p>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit:
      </p>
      <span className="text">
        <ol>
          <li>
            Aliquam urna sapien, tempus ac metus nec, bibendum venenatis lacus
            Maecenas ultrices libero quis lacus auctor convallis. Curabitur eu
            turpis, gravida gravida eros. Aliquam ornare a ante vel dapibus.
          </li>
        </ol>
      </span>
      <span className="text">
        <ol start="2">
          <li>Phasellus facilisis, neque et maximus posuere:</li>
        </ol>
        <ul>
          <li className="textSpacer">
            Mauris ex volutpat dui, a pharetra ipsum lorem sit amet metus
            Maecenas gravida orci ac risus ultricies, at pellentesque sapien.
          </li>
          <li className="textSpacer">
            Morbi ex dui, congue in pretium et, tempus non nulla. Duis sagittis
            vitae orci sit amet lobortis.
          </li>
          <li className="textSpacer">
            Morbi ex dui, congue in pretium et, tempus non nulla. Duis sagittis
            vitae orci sit amet lobortis.
          </li>
        </ul>
      </span>
      <span className="text">
        <ol start="3">
          <li>Please note that Morbi ex dui, congue in pretium.</li>
        </ol>
      </span>
    </div>
  )
}
