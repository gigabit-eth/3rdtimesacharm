import {
  UnifiedWalletProvider,
  UnifiedWalletButton,
} from "@jup-ag/wallet-adapter";
// const App = () => {
//   const wallets: Adapter[] = useMemo(() => {
//     const walletConnectWalletAdapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> | null =
//       (() => {
//         const adapter: WalletAdapterWithMutableSupportedTransactionVersions<BaseSignerWalletAdapter> =
//           new WalletConnectWalletAdapter({
//             network: WalletAdapterNetwork.Mainnet,
//             options: {
//               relayUrl: "wss://relay.walletconnect.com",
//               projectId: metadata.walletConnectProjectId,
//               metadata: {
//                 name: metadata.name,
//                 description: metadata.description,
//                 url: metadata.url,
//                 icons: metadata.iconUrls,
//               },
//             },
//           });

//         // While sometimes supported, it mostly isn't. Should this be dynamic in the wallet-adapter instead?
//         adapter.supportedTransactionVersions = new Set(["legacy"]);
//         return adapter;
//       })();

//     return [
//       new PhantomWalletAdapter(),
//       new SolflareWalletAdapter(),
//       new CoinbaseWalletAdapter(),
//       new TrustWalletAdapter(),
//       walletConnectWalletAdapter,
//     ].filter((item) => item && item.name && item.icon) as Adapter[];
//   }, []);

//   return (
//     <UnifiedWalletProvider
//       wallets={wallets}
//       config={{
//         autoConnect: false,
//         env: "mainnet-beta",
//         metadata: {
//           name: "UnifiedWallet",
//           description: "UnifiedWallet",
//           url: "https://jup.ag",
//           iconUrls: ["https://jup.ag/favicon.ico"],
//         },
//         notificationCallback: {},
//         walletlistExplanation: {
//           href: "https://station.jup.ag/docs/additional-topics/wallet-list",
//         },
//         theme: "dark",
//         lang: "en",
//       }}
//     >
//       <UnifiedWalletButton />
//     </UnifiedWalletProvider>
//   );
// };

const Web3Wallet = () => {
  return (
    <UnifiedWalletProvider
      wallets={[]}
      config={{
        autoConnect: false,
        env: "mainnet-beta",
        metadata: {
          name: "UnifiedWallet",
          description: "UnifiedWallet",
          url: "https://jup.ag",
          iconUrls: ["https://jup.ag/favicon.ico"],
        },
        // notificationCallback: WalletNotification,
        walletlistExplanation: {
          href: "https://station.jup.ag/docs/additional-topics/wallet-list",
        },
        theme: "jupiter",
      }}
    >
      <UnifiedWalletButton />
    </UnifiedWalletProvider>
  );
};

export default Web3Wallet;
