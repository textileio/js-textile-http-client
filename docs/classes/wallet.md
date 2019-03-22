[@textileio/js-http-client](../README.md) > [Wallet](../classes/wallet.md)

# Class: Wallet

Wallet is an API module for initializing wallets and creating/accessing accounts

A wallet is represented by mnemonic phrase, and in practice is a BIP32 Hierarchical Deterministic Wallet based on Stellar's implementation of SLIP-0010. You can think of a wallet as a master key, and the account represent keys specific to a given application or use-case. Any given wallet may create an arbitrary number of accounts.

Accounts are generated via the wallet pass-phrase and are an Ed25519 public/private keypair used to sign backups, provision libp2p identities, etc. Textile uses Ed25519 here because it's fast, compact, secure, and widely used. See the EdDSA Wikipedia page for more details.

WARNING! Store the derived pass-phrases in a safe place! WARNING! If you lose your words, you will lose access to data in all derived accounts! WARNING! Anyone who has access to these words can access your wallet accounts!

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `any`

**↳ Wallet**

## Index

### Constructors

* [constructor](wallet.md#constructor)

### Methods

* [accountAt](wallet.md#accountat)
* [fromEntropy](wallet.md#fromentropy)
* [fromWordCount](wallet.md#fromwordcount)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Wallet**(recoveryPhrase: *`string`*, check: *`undefined` \| `false` \| `true`*): [Wallet](wallet.md)

Initialize a new Wallet

*__example__*: const mnemonic = 'blah lava place private blah blah blah magic truth verify kite blah' const wallet = new Wallet(mnemonic, true) console.log(wallet.accountAt(0))

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| recoveryPhrase | `string` |  Mnemonic pass-phrase (aka wordlist, recovery phrase, etc) |
| check | `undefined` \| `false` \| `true` |

**Returns:** [Wallet](wallet.md)

___

## Methods

<a id="accountat"></a>

###  accountAt

▸ **accountAt**(index: *`number`*, password: *`undefined` \| `string`*): `object`

Accesses derived accounts (address/seed pairs) from a wallet

Derives key for a path in BIP-44 format and a seed. Ed25119 derivation operated on hardened keys only.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  Account index |
| password | `undefined` \| `string` |

**Returns:** `object`
A derived Wallet account

___
<a id="fromentropy"></a>

### `<Static>` fromEntropy

▸ **fromEntropy**(strength: *`any`*): [Wallet](wallet.md)

Generate a new Walet from a given entropy level

**Parameters:**

| Name | Type |
| ------ | ------ |
| strength | `any` |

**Returns:** [Wallet](wallet.md)

___
<a id="fromwordcount"></a>

### `<Static>` fromWordCount

▸ **fromWordCount**(wordCount: *`any`*): [Wallet](wallet.md)

Generate a new Walet from a given word count

**Parameters:**

| Name | Type |
| ------ | ------ |
| wordCount | `any` |

**Returns:** [Wallet](wallet.md)

___

