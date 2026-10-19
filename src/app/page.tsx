import { UtensilsCrossed, ExternalLink } from "lucide-react";

import { MenuQr } from "@/components/menu-qr";
import { Button } from "@/components/ui/button";

const MENU_URL = "https://cafe-data-01.storage.yandexcloud.net/index.html";
const DOMAIN = "покушатьздесь.рф";

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:py-16">
        <div className="flex w-full max-w-sm flex-col items-center gap-8 text-center">
          {/* Cafe name */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <UtensilsCrossed className="size-7" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Покушать Здесь
              </h1>
              <p className="text-muted-foreground">
                Наведите камеру телефона на QR-код — меню откроется само
              </p>
            </div>
          </div>

          {/* QR code card: stays white in both themes so scanners get
              the contrast they expect, like a printed code */}
          <div className="rounded-3xl border border-border bg-card p-3 shadow-sm">
            <MenuQr className="h-56 w-56 rounded-2xl sm:h-64 sm:w-64" />
          </div>

          {/* Menu link */}
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-xl bg-amber-600 text-base text-white shadow hover:bg-amber-700"
          >
            <a href={MENU_URL}>
              Открыть меню
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </Button>

        </div>
      </main>

      <footer className="pb-8 text-center text-sm text-muted-foreground">
        {DOMAIN}
      </footer>
    </div>
  );
}
