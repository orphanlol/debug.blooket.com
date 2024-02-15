// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts"
// @generated from file debugservice/v1/debugservice.proto (package debugservice.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CloudinaryKeyReply, CloudinaryKeyRequest, EndUserIPReply, EndUserIPRequest, FirebaseParamsReply, FirebaseParamsRequest, ParentDomainReply, ParentDomainRequest, ScoreRecaptchaReply, ScoreRecaptchaRequest, SetCookieReply, SetCookieRequest, StripeKeyReply, StripeKeyRequest, WafCheckReply, WafCheckRequest } from "./debugservice_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service debugservice.v1.DebugService
 */
export const DebugService = {
  typeName: "debugservice.v1.DebugService",
  methods: {
    /**
     * @generated from rpc debugservice.v1.DebugService.WafCheck
     */
    wafCheck: {
      name: "WafCheck",
      I: WafCheckRequest,
      O: WafCheckReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.ParentDomain
     */
    parentDomain: {
      name: "ParentDomain",
      I: ParentDomainRequest,
      O: ParentDomainReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.CloudinaryKey
     */
    cloudinaryKey: {
      name: "CloudinaryKey",
      I: CloudinaryKeyRequest,
      O: CloudinaryKeyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.StripeKey
     */
    stripeKey: {
      name: "StripeKey",
      I: StripeKeyRequest,
      O: StripeKeyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.EndUserIP
     */
    endUserIP: {
      name: "EndUserIP",
      I: EndUserIPRequest,
      O: EndUserIPReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.FirebaseParams
     */
    firebaseParams: {
      name: "FirebaseParams",
      I: FirebaseParamsRequest,
      O: FirebaseParamsReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.SetCookie
     */
    setCookie: {
      name: "SetCookie",
      I: SetCookieRequest,
      O: SetCookieReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc debugservice.v1.DebugService.ScoreRecaptcha
     */
    scoreRecaptcha: {
      name: "ScoreRecaptcha",
      I: ScoreRecaptchaRequest,
      O: ScoreRecaptchaReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

