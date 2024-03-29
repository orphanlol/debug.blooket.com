// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file debugservice/v1/debugservice.proto (package debugservice.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message debugservice.v1.WafCheckRequest
 */
export const WafCheckRequest = proto3.makeMessageType(
  "debugservice.v1.WafCheckRequest",
  [],
);

/**
 * @generated from message debugservice.v1.WafCheckReply
 */
export const WafCheckReply = proto3.makeMessageType(
  "debugservice.v1.WafCheckReply",
  [],
);

/**
 * @generated from message debugservice.v1.ParentDomainRequest
 */
export const ParentDomainRequest = proto3.makeMessageType(
  "debugservice.v1.ParentDomainRequest",
  [],
);

/**
 * @generated from message debugservice.v1.ParentDomainReply
 */
export const ParentDomainReply = proto3.makeMessageType(
  "debugservice.v1.ParentDomainReply",
  () => [
    { no: 1, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message debugservice.v1.CloudinaryKeyRequest
 */
export const CloudinaryKeyRequest = proto3.makeMessageType(
  "debugservice.v1.CloudinaryKeyRequest",
  [],
);

/**
 * @generated from message debugservice.v1.CloudinaryKeyReply
 */
export const CloudinaryKeyReply = proto3.makeMessageType(
  "debugservice.v1.CloudinaryKeyReply",
  () => [
    { no: 1, name: "cloudinary_api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message debugservice.v1.StripeKeyRequest
 */
export const StripeKeyRequest = proto3.makeMessageType(
  "debugservice.v1.StripeKeyRequest",
  [],
);

/**
 * @generated from message debugservice.v1.StripeKeyReply
 */
export const StripeKeyReply = proto3.makeMessageType(
  "debugservice.v1.StripeKeyReply",
  () => [
    { no: 1, name: "stripe_publishable_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message debugservice.v1.EndUserIPRequest
 */
export const EndUserIPRequest = proto3.makeMessageType(
  "debugservice.v1.EndUserIPRequest",
  [],
);

/**
 * @generated from message debugservice.v1.EndUserIPReply
 */
export const EndUserIPReply = proto3.makeMessageType(
  "debugservice.v1.EndUserIPReply",
  () => [
    { no: 1, name: "ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message debugservice.v1.FirebaseParamsRequest
 */
export const FirebaseParamsRequest = proto3.makeMessageType(
  "debugservice.v1.FirebaseParamsRequest",
  [],
);

/**
 * @generated from message debugservice.v1.FirebaseParamsReply
 */
export const FirebaseParamsReply = proto3.makeMessageType(
  "debugservice.v1.FirebaseParamsReply",
  () => [
    { no: 1, name: "debug_shard", kind: "message", T: FirebaseParamsReply_ShardAuth },
    { no: 2, name: "prod_shards", kind: "message", T: FirebaseParamsReply_ShardAuth, repeated: true },
  ],
);

/**
 * @generated from message debugservice.v1.FirebaseParamsReply.ShardAuth
 */
export const FirebaseParamsReply_ShardAuth = proto3.makeMessageType(
  "debugservice.v1.FirebaseParamsReply.ShardAuth",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "FirebaseParamsReply_ShardAuth"},
);

/**
 * @generated from message debugservice.v1.SetCookieRequest
 */
export const SetCookieRequest = proto3.makeMessageType(
  "debugservice.v1.SetCookieRequest",
  [],
);

/**
 * @generated from message debugservice.v1.SetCookieReply
 */
export const SetCookieReply = proto3.makeMessageType(
  "debugservice.v1.SetCookieReply",
  () => [
    { no: 1, name: "found_cookie", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "cookie_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message debugservice.v1.ScoreRecaptchaRequest
 */
export const ScoreRecaptchaRequest = proto3.makeMessageType(
  "debugservice.v1.ScoreRecaptchaRequest",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message debugservice.v1.ScoreRecaptchaReply
 */
export const ScoreRecaptchaReply = proto3.makeMessageType(
  "debugservice.v1.ScoreRecaptchaReply",
  () => [
    { no: 1, name: "assessment_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "reasons", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

