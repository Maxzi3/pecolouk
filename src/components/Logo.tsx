"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/pecolo.logo.png"
        alt="logo"
        width={150}
        height={300}
        className="block dark:hidden p-2"
        priority
      />
    </Link>
  );
};

export default Logo;
