export type Jupiter = {
  version: "0.1.0";
  name: "jupiter";
  instructions: [
    {
      name: "route";
      docs: ["route_plan Topologically sorted trade DAG"];
      accounts: [
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userTransferAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "userSourceTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userDestinationTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: false;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "destinationMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "platformFeeAccount";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "routePlan";
          type: {
            vec: {
              defined: "RoutePlanStep";
            };
          };
        },
        {
          name: "inAmount";
          type: "u64";
        },
        {
          name: "quotedOutAmount";
          type: "u64";
        },
        {
          name: "slippageBps";
          type: "u16";
        },
        {
          name: "platformFeeBps";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "routeWithTokenLedger";
      accounts: [
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userTransferAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "userSourceTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userDestinationTokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: false;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "destinationMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "platformFeeAccount";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "tokenLedger";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "routePlan";
          type: {
            vec: {
              defined: "RoutePlanStep";
            };
          };
        },
        {
          name: "quotedOutAmount";
          type: "u64";
        },
        {
          name: "slippageBps";
          type: "u16";
        },
        {
          name: "platformFeeBps";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "sharedAccountsRoute";
      docs: [
        "Route by using program owned token accounts and open orders accounts."
      ];
      accounts: [
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userTransferAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "sourceTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programSourceTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programDestinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sourceMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destinationMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "platformFeeAccount";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "token2022Program";
          isMut: false;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "id";
          type: "u8";
        },
        {
          name: "routePlan";
          type: {
            vec: {
              defined: "RoutePlanStep";
            };
          };
        },
        {
          name: "inAmount";
          type: "u64";
        },
        {
          name: "quotedOutAmount";
          type: "u64";
        },
        {
          name: "slippageBps";
          type: "u16";
        },
        {
          name: "platformFeeBps";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "sharedAccountsRouteWithTokenLedger";
      accounts: [
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userTransferAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "sourceTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programSourceTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programDestinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sourceMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destinationMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "platformFeeAccount";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "token2022Program";
          isMut: false;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "tokenLedger";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "id";
          type: "u8";
        },
        {
          name: "routePlan";
          type: {
            vec: {
              defined: "RoutePlanStep";
            };
          };
        },
        {
          name: "quotedOutAmount";
          type: "u64";
        },
        {
          name: "slippageBps";
          type: "u16";
        },
        {
          name: "platformFeeBps";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "sharedAccountsExactOutRoute";
      docs: [
        "Route by using program owned token accounts and open orders accounts."
      ];
      accounts: [
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userTransferAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "sourceTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programSourceTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programDestinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sourceMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "destinationMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "platformFeeAccount";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "token2022Program";
          isMut: false;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "id";
          type: "u8";
        },
        {
          name: "routePlan";
          type: {
            vec: {
              defined: "RoutePlanStep";
            };
          };
        },
        {
          name: "outAmount";
          type: "u64";
        },
        {
          name: "quotedInAmount";
          type: "u64";
        },
        {
          name: "slippageBps";
          type: "u16";
        },
        {
          name: "platformFeeBps";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "setTokenLedger";
      accounts: [
        {
          name: "tokenLedger";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createOpenOrders";
      accounts: [
        {
          name: "openOrders";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "dexProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "market";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "createProgramOpenOrders";
      accounts: [
        {
          name: "openOrders";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "programAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dexProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "market";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "id";
          type: "u8";
        }
      ];
    },
    {
      name: "claim";
      accounts: [
        {
          name: "wallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programAuthority";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "id";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "claimToken";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "wallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "id";
          type: "u8";
        }
      ];
      returns: "u64";
    },
    {
      name: "createTokenLedger";
      accounts: [
        {
          name: "tokenLedger";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "tokenLedger";
      type: {
        kind: "struct";
        fields: [
          {
            name: "tokenAccount";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "AmountWithSlippage";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "slippageBps";
            type: "u16";
          }
        ];
      };
    },
    {
      name: "RoutePlanStep";
      type: {
        kind: "struct";
        fields: [
          {
            name: "swap";
            type: {
              defined: "Swap";
            };
          },
          {
            name: "percent";
            type: "u8";
          },
          {
            name: "inputIndex";
            type: "u8";
          },
          {
            name: "outputIndex";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "Side";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Bid";
          },
          {
            name: "Ask";
          }
        ];
      };
    },
    {
      name: "Swap";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Saber";
          },
          {
            name: "SaberAddDecimalsDeposit";
          },
          {
            name: "SaberAddDecimalsWithdraw";
          },
          {
            name: "TokenSwap";
          },
          {
            name: "Sencha";
          },
          {
            name: "Step";
          },
          {
            name: "Cropper";
          },
          {
            name: "Raydium";
          },
          {
            name: "Crema";
            fields: [
              {
                name: "a_to_b";
                type: "bool";
              }
            ];
          },
          {
            name: "Lifinity";
          },
          {
            name: "Mercurial";
          },
          {
            name: "Cykura";
          },
          {
            name: "Serum";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          },
          {
            name: "MarinadeDeposit";
          },
          {
            name: "MarinadeUnstake";
          },
          {
            name: "Aldrin";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          },
          {
            name: "AldrinV2";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          },
          {
            name: "Whirlpool";
            fields: [
              {
                name: "a_to_b";
                type: "bool";
              }
            ];
          },
          {
            name: "Invariant";
            fields: [
              {
                name: "x_to_y";
                type: "bool";
              }
            ];
          },
          {
            name: "Meteora";
          },
          {
            name: "GooseFX";
          },
          {
            name: "DeltaFi";
            fields: [
              {
                name: "stable";
                type: "bool";
              }
            ];
          },
          {
            name: "Balansol";
          },
          {
            name: "MarcoPolo";
            fields: [
              {
                name: "x_to_y";
                type: "bool";
              }
            ];
          },
          {
            name: "Dradex";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          },
          {
            name: "LifinityV2";
          },
          {
            name: "RaydiumClmm";
          },
          {
            name: "Openbook";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          },
          {
            name: "Phoenix";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          },
          {
            name: "Symmetry";
            fields: [
              {
                name: "from_token_id";
                type: "u64";
              },
              {
                name: "to_token_id";
                type: "u64";
              }
            ];
          },
          {
            name: "TokenSwapV2";
          },
          {
            name: "HeliumTreasuryManagementRedeemV0";
          },
          {
            name: "StakeDexStakeWrappedSol";
          },
          {
            name: "StakeDexSwapViaStake";
            fields: [
              {
                name: "bridge_stake_seed";
                type: "u32";
              }
            ];
          },
          {
            name: "GooseFXV2";
          },
          {
            name: "Perps";
          },
          {
            name: "PerpsAddLiquidity";
          },
          {
            name: "PerpsRemoveLiquidity";
          },
          {
            name: "MeteoraDlmm";
          },
          {
            name: "OpenBookV2";
            fields: [
              {
                name: "side";
                type: {
                  defined: "Side";
                };
              }
            ];
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "SwapEvent";
      fields: [
        {
          name: "amm";
          type: "publicKey";
          index: false;
        },
        {
          name: "inputMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "inputAmount";
          type: "u64";
          index: false;
        },
        {
          name: "outputMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "outputAmount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "FeeEvent";
      fields: [
        {
          name: "account";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "EmptyRoute";
      msg: "Empty route";
    },
    {
      code: 6001;
      name: "SlippageToleranceExceeded";
      msg: "Slippage tolerance exceeded";
    },
    {
      code: 6002;
      name: "InvalidCalculation";
      msg: "Invalid calculation";
    },
    {
      code: 6003;
      name: "MissingPlatformFeeAccount";
      msg: "Missing platform fee account";
    },
    {
      code: 6004;
      name: "InvalidSlippage";
      msg: "Invalid slippage";
    },
    {
      code: 6005;
      name: "NotEnoughPercent";
      msg: "Not enough percent to 100";
    },
    {
      code: 6006;
      name: "InvalidInputIndex";
      msg: "Token input index is invalid";
    },
    {
      code: 6007;
      name: "InvalidOutputIndex";
      msg: "Token output index is invalid";
    },
    {
      code: 6008;
      name: "NotEnoughAccountKeys";
      msg: "Not Enough Account keys";
    },
    {
      code: 6009;
      name: "NonZeroMinimumOutAmountNotSupported";
      msg: "Non zero minimum out amount not supported";
    },
    {
      code: 6010;
      name: "InvalidRoutePlan";
      msg: "Invalid route plan";
    },
    {
      code: 6011;
      name: "InvalidReferralAuthority";
      msg: "Invalid referral authority";
    },
    {
      code: 6012;
      name: "LedgerTokenAccountDoesNotMatch";
      msg: "Token account doesn't match the ledger";
    },
    {
      code: 6013;
      name: "InvalidTokenLedger";
      msg: "Invalid token ledger";
    },
    {
      code: 6014;
      name: "IncorrectTokenProgramID";
      msg: "Token program ID is invalid";
    },
    {
      code: 6015;
      name: "TokenProgramNotProvided";
      msg: "Token program not provided";
    },
    {
      code: 6016;
      name: "SwapNotSupported";
      msg: "Swap not supported";
    },
    {
      code: 6017;
      name: "ExactOutAmountNotMatched";
      msg: "Exact out amount doesn't match";
    },
    {
      code: 6018;
      name: "SourceAndDestinationMintCannotBeTheSame";
      msg: "Source mint and destination mint cannot the same";
    }
  ];
};

export const JUPITER_IDL: Jupiter = {
  version: "0.1.0",
  name: "jupiter",
  instructions: [
    {
      name: "route",
      docs: ["route_plan Topologically sorted trade DAG"],
      accounts: [
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userTransferAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "userSourceTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userDestinationTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: false,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "destinationMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "platformFeeAccount",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "routePlan",
          type: {
            vec: {
              defined: "RoutePlanStep",
            },
          },
        },
        {
          name: "inAmount",
          type: "u64",
        },
        {
          name: "quotedOutAmount",
          type: "u64",
        },
        {
          name: "slippageBps",
          type: "u16",
        },
        {
          name: "platformFeeBps",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "routeWithTokenLedger",
      accounts: [
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userTransferAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "userSourceTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userDestinationTokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: false,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "destinationMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "platformFeeAccount",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "tokenLedger",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "routePlan",
          type: {
            vec: {
              defined: "RoutePlanStep",
            },
          },
        },
        {
          name: "quotedOutAmount",
          type: "u64",
        },
        {
          name: "slippageBps",
          type: "u16",
        },
        {
          name: "platformFeeBps",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "sharedAccountsRoute",
      docs: [
        "Route by using program owned token accounts and open orders accounts.",
      ],
      accounts: [
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userTransferAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "sourceTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programSourceTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programDestinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sourceMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destinationMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "platformFeeAccount",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "token2022Program",
          isMut: false,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
        {
          name: "routePlan",
          type: {
            vec: {
              defined: "RoutePlanStep",
            },
          },
        },
        {
          name: "inAmount",
          type: "u64",
        },
        {
          name: "quotedOutAmount",
          type: "u64",
        },
        {
          name: "slippageBps",
          type: "u16",
        },
        {
          name: "platformFeeBps",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "sharedAccountsRouteWithTokenLedger",
      accounts: [
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userTransferAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "sourceTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programSourceTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programDestinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sourceMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destinationMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "platformFeeAccount",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "token2022Program",
          isMut: false,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "tokenLedger",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
        {
          name: "routePlan",
          type: {
            vec: {
              defined: "RoutePlanStep",
            },
          },
        },
        {
          name: "quotedOutAmount",
          type: "u64",
        },
        {
          name: "slippageBps",
          type: "u16",
        },
        {
          name: "platformFeeBps",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "sharedAccountsExactOutRoute",
      docs: [
        "Route by using program owned token accounts and open orders accounts.",
      ],
      accounts: [
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userTransferAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "sourceTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programSourceTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programDestinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sourceMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "destinationMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "platformFeeAccount",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "token2022Program",
          isMut: false,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
        {
          name: "routePlan",
          type: {
            vec: {
              defined: "RoutePlanStep",
            },
          },
        },
        {
          name: "outAmount",
          type: "u64",
        },
        {
          name: "quotedInAmount",
          type: "u64",
        },
        {
          name: "slippageBps",
          type: "u16",
        },
        {
          name: "platformFeeBps",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "setTokenLedger",
      accounts: [
        {
          name: "tokenLedger",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createOpenOrders",
      accounts: [
        {
          name: "openOrders",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "dexProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "market",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "createProgramOpenOrders",
      accounts: [
        {
          name: "openOrders",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "programAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dexProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "market",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
      ],
    },
    {
      name: "claim",
      accounts: [
        {
          name: "wallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programAuthority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "claimToken",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "wallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "id",
          type: "u8",
        },
      ],
      returns: "u64",
    },
    {
      name: "createTokenLedger",
      accounts: [
        {
          name: "tokenLedger",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "tokenLedger",
      type: {
        kind: "struct",
        fields: [
          {
            name: "tokenAccount",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "AmountWithSlippage",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "slippageBps",
            type: "u16",
          },
        ],
      },
    },
    {
      name: "RoutePlanStep",
      type: {
        kind: "struct",
        fields: [
          {
            name: "swap",
            type: {
              defined: "Swap",
            },
          },
          {
            name: "percent",
            type: "u8",
          },
          {
            name: "inputIndex",
            type: "u8",
          },
          {
            name: "outputIndex",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "Side",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Bid",
          },
          {
            name: "Ask",
          },
        ],
      },
    },
    {
      name: "Swap",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Saber",
          },
          {
            name: "SaberAddDecimalsDeposit",
          },
          {
            name: "SaberAddDecimalsWithdraw",
          },
          {
            name: "TokenSwap",
          },
          {
            name: "Sencha",
          },
          {
            name: "Step",
          },
          {
            name: "Cropper",
          },
          {
            name: "Raydium",
          },
          {
            name: "Crema",
            fields: [
              {
                name: "a_to_b",
                type: "bool",
              },
            ],
          },
          {
            name: "Lifinity",
          },
          {
            name: "Mercurial",
          },
          {
            name: "Cykura",
          },
          {
            name: "Serum",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
          {
            name: "MarinadeDeposit",
          },
          {
            name: "MarinadeUnstake",
          },
          {
            name: "Aldrin",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
          {
            name: "AldrinV2",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
          {
            name: "Whirlpool",
            fields: [
              {
                name: "a_to_b",
                type: "bool",
              },
            ],
          },
          {
            name: "Invariant",
            fields: [
              {
                name: "x_to_y",
                type: "bool",
              },
            ],
          },
          {
            name: "Meteora",
          },
          {
            name: "GooseFX",
          },
          {
            name: "DeltaFi",
            fields: [
              {
                name: "stable",
                type: "bool",
              },
            ],
          },
          {
            name: "Balansol",
          },
          {
            name: "MarcoPolo",
            fields: [
              {
                name: "x_to_y",
                type: "bool",
              },
            ],
          },
          {
            name: "Dradex",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
          {
            name: "LifinityV2",
          },
          {
            name: "RaydiumClmm",
          },
          {
            name: "Openbook",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
          {
            name: "Phoenix",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
          {
            name: "Symmetry",
            fields: [
              {
                name: "from_token_id",
                type: "u64",
              },
              {
                name: "to_token_id",
                type: "u64",
              },
            ],
          },
          {
            name: "TokenSwapV2",
          },
          {
            name: "HeliumTreasuryManagementRedeemV0",
          },
          {
            name: "StakeDexStakeWrappedSol",
          },
          {
            name: "StakeDexSwapViaStake",
            fields: [
              {
                name: "bridge_stake_seed",
                type: "u32",
              },
            ],
          },
          {
            name: "GooseFXV2",
          },
          {
            name: "Perps",
          },
          {
            name: "PerpsAddLiquidity",
          },
          {
            name: "PerpsRemoveLiquidity",
          },
          {
            name: "MeteoraDlmm",
          },
          {
            name: "OpenBookV2",
            fields: [
              {
                name: "side",
                type: {
                  defined: "Side",
                },
              },
            ],
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "SwapEvent",
      fields: [
        {
          name: "amm",
          type: "publicKey",
          index: false,
        },
        {
          name: "inputMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "inputAmount",
          type: "u64",
          index: false,
        },
        {
          name: "outputMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "outputAmount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "FeeEvent",
      fields: [
        {
          name: "account",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "EmptyRoute",
      msg: "Empty route",
    },
    {
      code: 6001,
      name: "SlippageToleranceExceeded",
      msg: "Slippage tolerance exceeded",
    },
    {
      code: 6002,
      name: "InvalidCalculation",
      msg: "Invalid calculation",
    },
    {
      code: 6003,
      name: "MissingPlatformFeeAccount",
      msg: "Missing platform fee account",
    },
    {
      code: 6004,
      name: "InvalidSlippage",
      msg: "Invalid slippage",
    },
    {
      code: 6005,
      name: "NotEnoughPercent",
      msg: "Not enough percent to 100",
    },
    {
      code: 6006,
      name: "InvalidInputIndex",
      msg: "Token input index is invalid",
    },
    {
      code: 6007,
      name: "InvalidOutputIndex",
      msg: "Token output index is invalid",
    },
    {
      code: 6008,
      name: "NotEnoughAccountKeys",
      msg: "Not Enough Account keys",
    },
    {
      code: 6009,
      name: "NonZeroMinimumOutAmountNotSupported",
      msg: "Non zero minimum out amount not supported",
    },
    {
      code: 6010,
      name: "InvalidRoutePlan",
      msg: "Invalid route plan",
    },
    {
      code: 6011,
      name: "InvalidReferralAuthority",
      msg: "Invalid referral authority",
    },
    {
      code: 6012,
      name: "LedgerTokenAccountDoesNotMatch",
      msg: "Token account doesn't match the ledger",
    },
    {
      code: 6013,
      name: "InvalidTokenLedger",
      msg: "Invalid token ledger",
    },
    {
      code: 6014,
      name: "IncorrectTokenProgramID",
      msg: "Token program ID is invalid",
    },
    {
      code: 6015,
      name: "TokenProgramNotProvided",
      msg: "Token program not provided",
    },
    {
      code: 6016,
      name: "SwapNotSupported",
      msg: "Swap not supported",
    },
    {
      code: 6017,
      name: "ExactOutAmountNotMatched",
      msg: "Exact out amount doesn't match",
    },
    {
      code: 6018,
      name: "SourceAndDestinationMintCannotBeTheSame",
      msg: "Source mint and destination mint cannot the same",
    },
  ],
};