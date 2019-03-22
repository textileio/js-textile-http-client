[@textileio/js-http-client](../README.md) > [IPFS](../classes/ipfs.md)

# Class: IPFS

IPFS is an API module for working with an underlying IPFS peer

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ IPFS**

## Index

### Constructors

* [constructor](ipfs.md#constructor)

### Properties

* [opts](ipfs.md#opts)

### Methods

* [cat](ipfs.md#cat)
* [con](ipfs.md#con)
* [peerId](ipfs.md#peerid)
* [sendDelete](ipfs.md#senddelete)
* [sendGet](ipfs.md#sendget)
* [sendPost](ipfs.md#sendpost)
* [sendPostCancelable](ipfs.md#sendpostcancelable)
* [sendPostMultiPart](ipfs.md#sendpostmultipart)
* [sendPut](ipfs.md#sendput)
* [swarmConnect](ipfs.md#swarmconnect)
* [swarmPeers](ipfs.md#swarmpeers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new IPFS**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [IPFS](ipfs.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [IPFS](ipfs.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="cat"></a>

###  cat

▸ **cat**(cid: *`string`*, key: *`string`*): `Promise`<`any`>

Retrieves the data behind an IPFS CID (hash)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cid | `string` |  IPFS/IPNS content ID |
| key | `string` |

**Returns:** `Promise`<`any`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="peerid"></a>

###  peerId

▸ **peerId**(): `Promise`<`any`>

Retrieves underlying IPFS peer ID

**Returns:** `Promise`<`any`>

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
<a id="swarmconnect"></a>

###  swarmConnect

▸ **swarmConnect**(addr: *`string`*): `Promise`<`any`>

Opens a new direct connection to a peer using an IPFS multiaddr

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| addr | `string` |  Peer IPFS multiaddr |

**Returns:** `Promise`<`any`>

___
<a id="swarmpeers"></a>

###  swarmPeers

▸ **swarmPeers**(options: *[KeyValue](../interfaces/keyvalue.md)*): `Promise`<`any`>

Lists the set of peers to which this node is connected

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [KeyValue](../interfaces/keyvalue.md) |

**Returns:** `Promise`<`any`>

___

