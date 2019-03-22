[@textileio/js-http-client](../README.md) > [Account](../classes/account.md)

# Class: Account

Account is an API module for managing a wallet account

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Account**

## Index

### Constructors

* [constructor](account.md#constructor)

### Properties

* [opts](account.md#opts)

### Methods

* [address](account.md#address)
* [con](account.md#con)
* [decrypt](account.md#decrypt)
* [encrypt](account.md#encrypt)
* [findThreadBackups](account.md#findthreadbackups)
* [peers](account.md#peers)
* [seed](account.md#seed)
* [sendDelete](account.md#senddelete)
* [sendGet](account.md#sendget)
* [sendPost](account.md#sendpost)
* [sendPostCancelable](account.md#sendpostcancelable)
* [sendPostMultiPart](account.md#sendpostmultipart)
* [sendPut](account.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Account**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Account](account.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Account](account.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="address"></a>

###  address

▸ **address**(): `Promise`<`any`>

Retrieve the local wallet account address

**Returns:** `Promise`<`any`>
address

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="decrypt"></a>

###  decrypt

▸ **decrypt**(input: *`Buffer`*): `Promise`<`void`>

Decrypts input with account address

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| input | `Buffer` |  Input ciphertext Buffer data |

**Returns:** `Promise`<`void`>
plaintext

___
<a id="encrypt"></a>

###  encrypt

▸ **encrypt**(input: *`Buffer`*): `Promise`<`void`>

Encrypts input with account address

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| input | `Buffer` |  Input plaintext Buffer data |

**Returns:** `Promise`<`void`>
ciphertext

___
<a id="findthreadbackups"></a>

###  findThreadBackups

▸ **findThreadBackups**(wait: *`number`*): `object`

Searches the network for wallet account thread backups

Returns streaming connection and a cancel function to cancel the request.

*__example__*: const backups = textile.account.findThreadBackups() setTimeout(() => backups.cancel(), 1000) // cancel after 1 second backups.on('textile.backups.found', found => { console.log(found) }) backups.on('\*.done', cancelled => { console.log(`search was ${cancelled ? 'cancelled' : 'completed'}`) })

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| wait | `number` |  Stops searching after 'wait' seconds have elapsed (max 10s, default 2s) |

**Returns:** `object`
Event emitter with found, done, error events on textile.backups.
The Event emitter has an additional cancel method that can be used to cancel the search.

___
<a id="peers"></a>

###  peers

▸ **peers**(): `Promise`<`any`>

Lists all known wallet account peers

**Returns:** `Promise`<`any`>

___
<a id="seed"></a>

###  seed

▸ **seed**(): `Promise`<`void`>

Retrieve the local wallet account seed

**Returns:** `Promise`<`void`>
seed

___
<a id="senddelete"></a>

###  sendDelete

▸ **sendDelete**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a delete request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendget"></a>

###  sendGet

▸ **sendGet**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a get request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendpost"></a>

###  sendPost

▸ **sendPost**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a post request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendpostcancelable"></a>

###  sendPostCancelable

▸ **sendPostCancelable**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `object`

Make a post request to the Textile node that is cancelable

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `object`
request

___
<a id="sendpostmultipart"></a>

###  sendPostMultiPart

▸ **sendPostMultiPart**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a post request to the Textile node using a multi-part form

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to post |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___
<a id="sendput"></a>

###  sendPut

▸ **sendPut**(url: *`string`*, args?: *`string`[]*, opts?: *[KeyValue](../interfaces/keyvalue.md)*, data?: *`any`*, headers?: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Make a put request to the Textile node

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The relative URL of the API endpoint |
| `Optional` args | `string`[] |  An array of arguments to pass as Textile args headers |
| `Optional` opts | [KeyValue](../interfaces/keyvalue.md) |  An object of options to pass as Textile options headers |
| `Optional` data | `any` |  An object of data to put |
| `Optional` headers | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___

