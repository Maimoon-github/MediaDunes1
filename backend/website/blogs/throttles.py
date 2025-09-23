from rest_framework.throttling import AnonRateThrottle, UserRateThrottle

class CommentAnonThrottle(AnonRateThrottle):
    scope = "comments_anon"

class CommentUserThrottle(UserRateThrottle):
    scope = "comments_user"

class ReactionAnonThrottle(AnonRateThrottle):
    scope = "reactions_anon"

class ReactionUserThrottle(UserRateThrottle):
    scope = "reactions_user"
