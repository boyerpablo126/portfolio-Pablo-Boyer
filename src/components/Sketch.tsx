/** Motif de substitution, remplaçable à tout moment par une vraie image de projet. */
export function Sketch({ variant = 0 }: { variant?: number }) {
  if (variant === 1) return (
    <svg className="sketch-svg" viewBox="0 0 620 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M92 290 275 122 478 207 286 377 92 290Z"/><path d="M92 290V213L275 51 478 135V207"/>
      <path d="M275 122V51M286 377V298L478 135M92 213 286 298 478 135"/>
      <path d="M173 326V242L260 167V357M313 191 313 275 406 192 406 153"/>
      <path d="M115 230 286 307 459 152M204 251 286 286 376 204" strokeDasharray="4 9"/>
      <path d="M70 376h480M80 90h90M80 97h64" className="soft-line"/>
    </svg>
  );
  if (variant === 2) return (
    <svg className="sketch-svg" viewBox="0 0 620 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M112 330 305 274 502 337 308 393 112 330Z"/><path d="M152 316V174L308 125 469 177V327"/>
      <path d="M308 125v151M152 174l156 53 161-50M308 227v166"/>
      <path d="M197 188v112M244 201v85M361 209v85M417 190v120"/>
      <path d="M153 173 305 72 469 177M305 72l3 53"/>
      <path d="M85 390h450M116 135h75M116 144h44" className="soft-line"/>
    </svg>
  );
  return (
    <svg className="sketch-svg" viewBox="0 0 620 410" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M101 321 287 250 509 332 319 397 101 321Z"/>
      <path d="M131 310V146l189-74 155 67v182"/>
      <path d="M131 146 319 218 475 139M319 218v179M320 72v146"/>
      <path d="M178 162v154M225 181v153M272 199v154M366 198v151M417 176v160"/>
      <path d="M131 261 319 331 475 264M131 309 319 378 475 313" strokeDasharray="5 9"/>
      <path d="M79 392h460M88 103h104" className="soft-line"/>
    </svg>
  );
}
