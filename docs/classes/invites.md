[@textileio/js-http-client](../README.md) > [Invites](../classes/invites.md)

# Class: Invites

Invites is an API module for managing thread invites

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Invites**

## Index

### Constructors

* [constructor](invites.md#constructor)

### Properties

* [opts](invites.md#opts)

### Methods

* [accept](invites.md#accept)
* [con](invites.md#con)
* [create](invites.md#create)
* [ignore](invites.md#ignore)
* [list](invites.md#list)
* [sendDelete](invites.md#senddelete)
* [sendGet](invites.md#sendget)
* [sendPost](invites.md#sendpost)
* [sendPostCancelable](invites.md#sendpostcancelable)
* [sendPostMultiPart](invites.md#sendpostmultipart)
* [sendPut](invites.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Invites**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Invites](invites.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Invites](invites.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="accept"></a>

###  accept

▸ **accept**(invite: *`string`*, key: *`string`*): `Promise`<`any`>

Accept an invite to a thread

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| invite | `string` |  Invite ID |
| key | `string` |  Key for an external invite |

**Returns:** `Promise`<`any`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="create"></a>

###  create

▸ **create**(thread: *`string`*, peer: *`string`*): `Promise`<`any`>

Create a peer-to-peer or external invite to a thread

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| thread | `string` |  Thread ID (can also use ‘default’) |
| peer | `string` |

**Returns:** `Promise`<`any`>

___
<a id="ignore"></a>

###  ignore

▸ **ignore**(id: *`string`*): `Promise`<`void`>

Ignore a direct invite to a thread

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the invite |

**Returns:** `Promise`<`void`>

___
<a id="list"></a>

###  list

▸ **list**(): `Promise`<`any`>

Lists all pending thread invites

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

