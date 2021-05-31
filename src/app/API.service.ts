/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: 'Todo';
  id?: string;
  name?: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  numberOfComments?: number | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  numberOfComments?: ModelIntInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Post = {
  __typename: 'Post';
  id?: string;
  title?: string;
  numberOfComments?: number | null;
  comments?: ModelCommentConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCommentConnection = {
  __typename: 'ModelCommentConnection';
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
};

export type Comment = {
  __typename: 'Comment';
  id?: string;
  postID?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  numberOfComments?: number | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelTodoConnection = {
  __typename: 'ModelTodoConnection';
  items?: Array<Todo | null> | null;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  numberOfComments?: ModelIntInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelPostConnection = {
  __typename: 'ModelPostConnection';
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type CreateTodoMutation = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTodoQuery = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: 'ModelTodoConnection';
  items?: Array<{
    __typename: 'Todo';
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: 'ModelPostConnection';
  items?: Array<{
    __typename: 'Post';
    id: string;
    title: string;
    numberOfComments?: number | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: 'ModelCommentConnection';
  items?: Array<{
    __typename: 'Comment';
    id: string;
    postID: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: 'Todo';
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: 'Post';
  id: string;
  title: string;
  numberOfComments?: number | null;
  comments?: {
    __typename: 'ModelCommentConnection';
    items?: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: 'Comment';
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            numberOfComments
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateTodoListener: Observable<
    SubscriptionResponse<OnCreateTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTodoSubscription>>;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<OnUpdateTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTodoSubscription>>;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<OnDeleteTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTodoSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          numberOfComments
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;
}

//Adding my on code
