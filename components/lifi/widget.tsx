"use client";
import { LiFiWidget } from "@lifi/widget";

export const Widget = () => {
  return (
    <LiFiWidget
      config={{
        // toChain: "1151111081099710",
        theme: {
          container: {
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
            borderRadius: "16px",
          },
        },
        // featured: [
        //   {
        //     address: "",
        //     symbol: "SOL",
        //     decimals: 9,
        //     chainId: "1151111081099710",
        //     logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
        //   },
        // ],
        hiddenUI: ["poweredBy"],
      }}
      integrator="GGQuNCPyJ2uV6zAzUKCQaZk9TJ6xRQLq6jaZC6CMKRg7"
    />
  );
};
