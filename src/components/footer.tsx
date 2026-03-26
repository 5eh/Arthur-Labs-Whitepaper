import { Button } from "~~/components/ui/button";
import { Linkedin, ScrollIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { IconArticle } from "@tabler/icons-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-background py-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full p-8">
            <Image
              src="/portfolio/Arthur_Labs-Logo.png"
              alt="Arthur Labs Logo"
              width={64}
              height={64}
              className="w-24 h-24"
            />
          </div>
          <div className="mb-8 flex space-x-4">
            <Link href="https://github.com/Arthur-Labs-DAO">
              <Button variant="outline" size="icon">
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.x.com/ArthurLabsDAO">
              <Button variant="outline" size="icon">
                <TwitterIcon className="h-4 w-4" />
                <span className="sr-only">X</span>
              </Button>
            </Link>
            <Link href="https://arthurlabs.medium.com">
              <Button variant="outline" size="icon">
                <IconArticle className="h-4 w-4" />
                <span className="sr-only">Medium</span>
              </Button>
            </Link>
            <Link href="https://docs.arthurlabs.net">
              <Button variant="outline" size="icon">
                <ScrollIcon className="h-4 w-4" />
                <span className="sr-only">Documentation</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/company/arthur-labs-dao/">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-bold">
              &copy; 2024 Arthur Labs Inc. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Filing WY S-Corp: 2024-001512097
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
