import { AbilityBuilder } from "@casl/ability";
import { AppAbility } from ".";
import { Role } from "./roles";


type PermissionsByRole = (user: any, build: AbilityBuilder<AppAbility>) => void;

export const permissions:Record<Role, PermissionsByRole> = {
  ADMIN: (_, {can}) => {
    can("manage","User")
  },
  MEMBER: (user, {can}) => {
    // can("invite", "User")
    can('manage', 'Project')
    can(['create', 'get'], 'Project', {ownerId:  { $eq: user.id } })
  },
  BILLING: () => {}
}