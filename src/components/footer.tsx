import { cn } from "@/lib/utils";

/**
 * Links para redes sociais.
 * `href` abre em nova aba com `rel="noopener noreferrer"` por segurança.
 */
const socialLinks = {
  instagram: "https://www.instagram.com/leonardocintra",
  youtube: "https://www.youtube.com/@leonardocintra",
  tiktok: "https://www.tiktok.com/@leonardocintra",
} as const;

/**
 * Ícone Instagram — SVG inline do Simple Icons (marca registrada).
 */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Instagram"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
    >
      <title>Instagram</title>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.355-1.065-.412-2.235-.057-1.274-.07-1.649-.07-4.859s.015-3.585.074-4.85c.061-1.17.256-1.805.421-2.227.224-.569.479-.96.899-1.382.419-.419.824-.679 1.38-.896.42-.164 1.065-.36 2.235-.413 1.275-.057 1.65-.07 4.859-.07zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.44 1.44-1.44.793-.001 1.44.645 1.44 1.44z" />
    </svg>
  );
}

/**
 * Ícone YouTube — SVG inline do Simple Icons (marca registrada).
 */
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="YouTube"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
    >
      <title>YouTube</title>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/**
 * Ícone TikTok — SVG inline do Simple Icons (marca registrada).
 */
function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="TikTok"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
    >
      <title>TikTok</title>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.05 1.17-.27 2.35-.87 3.39-1.01 1.81-2.97 3.03-5.03 3.13-1.49.07-2.99-.31-4.19-1.09-1.4-.89-2.4-2.4-2.65-4.03-.06-.47-.1-.95-.08-1.42.03-1.13.42-2.25 1.09-3.16.66-.91 1.62-1.6 2.7-1.97l.03-.05c-.01.81.01 1.63.02 2.44.22.21.46.38.71.5.99.61 2.25.62 3.25.04.61-.36 1.07-.94 1.24-1.62.29-1.01.16-2.07.2-3.11V.02c1.31-.02 2.62-.01 3.91-.01z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 border-t pt-6">
        {/* Redes sociais */}
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="sr-only">YouTube</span>
            <YoutubeIcon />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="sr-only">TikTok</span>
            <TiktokIcon />
          </a>
        </div>

        {/* Créditos */}
        <p className="text-sm text-muted-foreground">
          Desenvolvido com{" "}
          <span aria-hidden="true" className="text-red-500">
            ❤
          </span>{" "}
          por{" "}
          <a
            href="https://leonardocintra.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Leonardo Cintra
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} - Avisei Preço BOM! Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
