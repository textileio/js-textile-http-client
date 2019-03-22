[@textileio/js-http-client](../README.md) > [Comments](../classes/comments.md)

# Class: Comments

Comments is an API module for managing thread/block comments

Comments are added as blocks in a thread, which target another block, usually a file(s).

*__param__*: API options object

*__extends__*: API

## Hierarchy

 `API`

**↳ Comments**

## Index

### Constructors

* [constructor](comments.md#constructor)

### Properties

* [opts](comments.md#opts)

### Methods

* [add](comments.md#add)
* [con](comments.md#con)
* [get](comments.md#get)
* [ignore](comments.md#ignore)
* [list](comments.md#list)
* [sendDelete](comments.md#senddelete)
* [sendGet](comments.md#sendget)
* [sendPost](comments.md#sendpost)
* [sendPostCancelable](comments.md#sendpostcancelable)
* [sendPostMultiPart](comments.md#sendpostmultipart)
* [sendPut](comments.md#sendput)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Comments**(opts: *[ApiOptions](../interfaces/apioptions.md)*): [Comments](comments.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| opts | [ApiOptions](../interfaces/apioptions.md) |

**Returns:** [Comments](comments.md)

___

## Properties

<a id="opts"></a>

###  opts

**● opts**: *[ApiOptions](../interfaces/apioptions.md)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(block: *`string`*, body: *`string`*): `Promise`<`any`>

Adds a comment to a block

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| block | `string` |  Target block ID. Usually a file(s) block. |
| body | `string` |  Comment body |

**Returns:** `Promise`<`any`>

___
<a id="con"></a>

###  con

▸ **con**(): `any`

**Returns:** `any`

___
<a id="get"></a>

###  get

▸ **get**(id: *`string`*): `Promise`<`any`>

Retrieves a comment by ID

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the target comment |

**Returns:** `Promise`<`any`>

___
<a id="ignore"></a>

###  ignore

▸ **ignore**(id: *`string`*): `Promise`<`void`>

Ignores a block comment by its ID

This adds an 'ignore' thread block targeted at the comment. Ignored blocks are by default not returned when listing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  ID of the comment |

**Returns:** `Promise`<`void`>

___
<a id="list"></a>

###  list

▸ **list**(block: *`string`*): `Promise`<`any`>

Retrieves a list of comments on a target block

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| block | `string` |  ID of the target block |

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

